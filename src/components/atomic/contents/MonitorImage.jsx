import React, { useEffect, useRef, useState } from "react";

import styled from "styled-components";
import { mobileIconHeight, monitorIconHeight } from "../../../common/size";
import colors from "../../../common/colors";
import { PUBLIC_URL } from "../../../common/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const MonitorContainer = ({ isMobile, children, monitorHeight }) => {
  return (
    <>
      <Monitor
        style={
          isMobile
            ? { height: monitorHeight, borderRadius: "0.8rem 0.8rem 0 0" }
            : { height: monitorHeight }
        }
      >
        {children}
      </Monitor>

      {isMobile ? (
        <MobileBar style={{ height: monitorHeight * 0.05 }} />
      ) : (
        <>
          <VerticalLine style={{ height: monitorHeight * 0.15 }} />

          <HorizontalLine />
        </>
      )}
    </>
  );
};

const MonitorImage = ({
  images = ["img/js.png", "img/html.png", "img/css.png"],
  isMobile = false,
}) => {
  const ref = useRef();
  const [monitorHeight, setMonitorHeight] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const TOTAL_IMAGES = images.length - 1;

  const onClickPrev = () => {
    if (currentIndex == 0) {
      setCurrentIndex(TOTAL_IMAGES);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };
  const onClickNext = () => {
    if (currentIndex == TOTAL_IMAGES) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleResize = () => {
    const width = ref?.current?.offsetWidth;
    const _height = isMobile
      ? mobileIconHeight(width)
      : monitorIconHeight(width);
    setMonitorHeight(_height);
  };

  useEffect(() => {
    handleResize();

    if (window) {
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener(
          "resize",
          window.addEventListener("resize", handleResize)
        );
      };
    }
  }, []);

  return (
    <Container
      ref={ref}
      style={isMobile ? { width: "60%" } : { width: "100%" }}
    >
      <MonitorContainer isMobile={isMobile} monitorHeight={monitorHeight}>
        <ArrowButton onClick={onClickPrev} style={{ left: "2%" }}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </ArrowButton>

        <ArrowButton onClick={onClickNext} style={{ right: "2%" }}>
          <FontAwesomeIcon icon={faChevronRight} />
        </ArrowButton>

        <ImageBox>
          {images &&
            images.map((src, idx) => (
              <Image
                key={`image_${src}${idx}`}
                src={`${PUBLIC_URL}/${src}`}
                current={currentIndex}
              />
            ))}
        </ImageBox>

        <IndicatorDiv>
          {images &&
            images.map((_, idx) => (
              <Indicator
                key={`indicator_${_}${idx}`}
                focused={idx === currentIndex ? 1 : 0}
              />
            ))}
        </IndicatorDiv>
      </MonitorContainer>
    </Container>
  );
};

export default MonitorImage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const Monitor = styled.div`
  width: 100%;

  background-color: ${colors.COLOR_GRAY_BACKGROUND};
  border-radius: 0.8rem;
  border: 0.8rem solid black;
  position: relative;
  overflow: hidden;
`;

const ArrowButton = styled.div`
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${colors.COLOR_TRANSPARENT_BACKGROUND};
  position: absolute;
  top: calc(50% - 1.1rem);
  z-index: 10;
  color: white;
`;

const ImageBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
`;

const Image = styled.img`
  display: inline-block;
  width: 100%;
  min-width: 100%;
  height: 100%;
  object-fit: contain;

  transition: all 0.5s ease-in-out;
  transform: ${({ current }) => "translateX(-" + current * 100 + "%)"};
`;

const IndicatorDiv = styled.div`
  position: absolute;
  left: 0;
  bottom: 3%;

  width: 100%;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  //   background-color: orange;
  overflow: hidden;
  padding: 3%;
`;
const Indicator = styled.div`
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 50%;
  background-color: ${({ focused }) =>
    focused ? "black" : colors.COLOR_TRANSPARENT_BACKGROUND};
`;

const VerticalLine = styled.div`
  background-color: black;
  width: 20%;
`;

const HorizontalLine = styled.div`
  background-color: black;
  width: 70%;
  height: 0.8rem;
  border-radius: 100px;
`;

const MobileBar = styled.div`
  width: 100%;
  background-color: black;
  border-radius: 0 0 0.8rem 0.8rem;
`;

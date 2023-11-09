import React, { useEffect, useState, useRef } from "react";

import styled from "styled-components";

import { PROJECTS_URL } from "../../../common/config";
import { mobileHeight, pcHeight } from "../../../common/size";
import colors from "../../../common/colors";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const ImageCarousel = ({ images, mobile }) => {
  const IMAGES = images.length - 1;

  const [height, setHeight] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const ref = useRef();

  const onClickArrow = (isLeft) => {
    if (isLeft) {
      if (currentIndex == 0) {
        setCurrentIndex(IMAGES);
      } else {
        setCurrentIndex(currentIndex - 1);
      }
    } else {
      if (currentIndex == IMAGES) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }
  };

  const handleResize = () => {
    const width = ref.current.offsetWidth;
    const _height = mobile ? mobileHeight(width) : pcHeight(width);

    setHeight(_height);
  };

  useEffect(() => {
    handleResize();
    if (window) {
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <Container ref={ref} style={mobile ? { width: "50%", height } : { height }}>
      <ArrowButton className="left" onClick={onClickArrow.bind(this, true)}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </ArrowButton>

      <ImageContainer>
        {images &&
          images.map((src, idx) => (
            <Image
              key={`image_carousel_${src}_${idx}`}
              src={`${PROJECTS_URL}/${src}`}
              current={currentIndex}
            />
          ))}
      </ImageContainer>

      <ArrowButton className="right" onClick={onClickArrow.bind(this, false)}>
        <FontAwesomeIcon icon={faChevronRight} />
      </ArrowButton>

      {/* Indicator */}
      <IndicatorDiv>
        {images &&
          images.map((_, idx) => (
            <Indicator
              key={`indicator_${_}`}
              className={idx === currentIndex ? "focused" : ""}
            />
          ))}
      </IndicatorDiv>
    </Container>
  );
};

export default ImageCarousel;

const Container = styled.div`
  width: 100%;
  position: relative;
  border-radius: 0.8rem;
  border: 0.8rem solid black;
  background-color: ${colors.COLOR_GRAY_BACKGROUND};
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;

  overflow-x: hidden;
  overflow-y: scroll;
`;

const Image = styled.img`
  display: inline-block;
  width: 100%;
  min-width: 100%;
  object-fit: cover;

  transition: all 0.5s ease-in-out;
  transform: ${({ current }) => `translateX(-${current * 100}%)`};
`;

const ArrowButton = styled.div`
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${colors.COLOR_TRANSPARENT_BACKGROUND};
  color: white;

  position: absolute;
  top: calc(50% - 1.1rem);
  z-index: 10;

  &.left {
    left: 2%;
  }
  &.right {
    right: 2%;
  }
`;

const IndicatorDiv = styled.div`
  width: 100%;
  padding: 0 1rem;

  position: absolute;
  bottom: 5%;
  left: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const Indicator = styled.div`
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 100%;
  background-color: ${colors.COLOR_TRANSPARENT_BACKGROUND};

  &.focused {
    background-color: black;
  }
`;

import React, { useEffect, useRef, useState } from "react";

import styled from "styled-components";
import { mobileIconHeight, monitorIconHeight } from "../../../common/size";
import colors from "../../../common/colors";

const MonitorImage = ({ imageSrc, isMobile = false }) => {
  const ref = useRef();
  const [monitorHeight, setMonitorHeight] = useState(0);

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
      {isMobile ? (
        <>
          <Monitor
            style={{ height: monitorHeight, borderRadius: "0.8rem 0.8rem 0 0" }}
          />
          <MobileBar style={{ height: monitorHeight * 0.05 }} />
        </>
      ) : (
        <>
          <Monitor style={{ height: monitorHeight }} />

          <VerticalLine style={{ height: monitorHeight * 0.15 }} />

          <HorizontalLine />
        </>
      )}
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

  background-image: url("img/js.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
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

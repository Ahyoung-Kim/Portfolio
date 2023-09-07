import React, { useEffect, useState } from "react";

import styled from "styled-components";
import { useMediaQueries } from "../../layout/MediaQuery";
import SectionList, { SECTION_LIMIT } from "../../../constants/SectionList";
import colors from "../../../common/colors";

const StatusBar = ({ currentSection }) => {
  const { isPc } = useMediaQueries();

  const size = `calc(100% / ${SECTION_LIMIT})`;
  const position = `${currentSection * 100}%`;

  return (
    <Container className={isPc ? "pc-bar" : "mobile-bar"}>
      <Bar className={isPc ? "pc-bar" : "mobile-bar"}>
        <Section
          style={
            isPc
              ? {
                  width: "100%",
                  height: size,
                  transform: `translateY(${position})`,
                }
              : {
                  height: "100%",
                  width: size,
                  transform: `translateX(${position})`,
                }
          }
        />
      </Bar>
    </Container>
  );
};

export default StatusBar;

const Container = styled.div`
  position: fixed;
  left: 0;
  z-index: 11;
  display: flex;
  align-items: center;
  justify-content: center;
  // background-color: aqua;

  &.pc-bar {
    top: 0;
    height: 100vh;
    width: 5%;
  }
  &.mobile-bar {
    bottom: 0;
    width: 100%;
    height: 4rem;
  }
`;

const Bar = styled.div`
  border-radius: 1rem;
  overflow: hidden;
  display: flex;
  gap: 0;
  background-color: ${colors.COLOR_TRANSPARENT_BACKGROUND};
  position: relative;

  &.pc-bar {
    flex-direction: column;
    height: 30%;
    width: 10%;
  }
  &.mobile-bar {
    flex-direction: row;
    width: 50%;
    height: 10%;
  }
`;

const Section = styled.div`
  //   flex: 1;
  //   transition: 0.3s;

  background-color: ${colors.COLOR_PINK};
  border-radius: inherit;
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.3s;
`;

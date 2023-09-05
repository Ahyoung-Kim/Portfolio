import React, { useEffect, useState } from "react";

import styled from "styled-components";
import { useMediaQueries } from "../../layout/MediaQuery";
import SectionList from "../../../constants/SectionList";
import colors from "../../../common/colors";

const StatusBar = ({ currentSection }) => {
  const { isPc } = useMediaQueries();

  return (
    <Container className={isPc ? "pc-bar" : "mobile-bar"}>
      <Bar className={isPc ? "pc-bar" : "mobile-bar"}>
        {Object.keys(SectionList).map((_, idx) => (
          <Section
            key={`section_bar_${_}`}
            style={
              currentSection === idx
                ? { backgroundColor: colors.COLOR_PINK }
                : {}
            }
          />
        ))}
      </Bar>
    </Container>
  );
};

export default StatusBar;

const Container = styled.div`
  position: fixed;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  //   background-color: aqua;

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
  flex: 1;
  background-color: ${colors.COLOR_TRANSPARENT_BACKGROUND};
  transition: 0.3s;
`;

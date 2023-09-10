import React, { useEffect, useRef, useState } from "react";

import styled, { keyframes } from "styled-components";
import colors from "../../common/colors";
import useIsSectionActive from "../hooks/useIsSectionActive";
import { useMediaQueries } from "./MediaQuery";

const SectionLayout = ({
  bgStyle = {},
  children,
  section,
  showName = true,
  nameColor = colors.COLOR_PINK,
  justifyContent = "center",
}) => {
  const ref = useRef(null);
  const { isPc } = useMediaQueries();
  const isActive = useIsSectionActive(section.index);

  return (
    <>
      <Container
        id={section.id}
        style={{
          zIndex: section.zIndex,
          ...bgStyle,
        }}
        ref={ref}
      >
        <Contents
          className={isActive ? "active" : ""}
          style={{ padding: isPc ? "4rem 10%" : "4rem 5%" }}
        >
          {showName && (
            <SectionName
              className="bold-text"
              style={{ color: nameColor, fontSize: isPc ? "2rem" : "1.5rem" }}
            >
              {section.name}
            </SectionName>
          )}

          <ContentsWrapper style={{ justifyContent }}>
            {children}
          </ContentsWrapper>
        </Contents>
      </Container>
    </>
  );
};

export default SectionLayout;

const Container = styled.div`
  width: 100%;
  // height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: white;

  &::-webkit-scrollbar {
    display: none;
  }

  position: absolute;
  top: 0;
  left: 0;
  transition: 1s;
`;

const move = keyframes`
0% {
  // transform: translateY(15vh);
  transform: scale(0.8);
  opacity: 0;
}
100% {
  // transform: translateY(0);
  transform: scale(1);
  opacity: 1;
}
`;

const Contents = styled.div`
  width: 100%;
  // min-height: 100vh;
  min-height: calc(var(--vh, 1vh) * 100);
  // background-color: white;

  display: flex;
  flex-direction: column;
  // align-items: center;
  // justify-content: center;

  &.active {
    animation: ${move} 2s ease forwards;
  }
`;

const SectionName = styled.p`
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  // background-color: aqua;
`;

const ContentsWrapper = styled.div`
  width: 100%;
  // min-height: calc(100vh - 12rem);
  min-height: calc(var(--vh, 1vh) * 100 - 12rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  // background-color: orange;
`;

import React, { useEffect } from "react";

import styled, { keyframes } from "styled-components";
import colors from "../../common/colors";

const SectionLayout = ({
  bgStyle = {},
  children,
  section,
  showName = true,
  nameColor = colors.COLOR_PINK,
}) => {
  return (
    <>
      <Container
        id={section.id}
        style={{
          zIndex: section.zIndex,
          ...bgStyle,
        }}
      >
        <Contents>
          {showName && (
            <SectionName className="bold-text" style={{ color: nameColor }}>
              {section.name}
            </SectionName>
          )}

          <ContentsWrapper>{children}</ContentsWrapper>
        </Contents>
      </Container>
    </>
  );
};

export default SectionLayout;

const Container = styled.div`
  width: 100%;
  height: 100vh;
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
  transform: translateY(15vh);
  opacity: 0;
}
100% {
  transform: translateY(0);
  opacity: 1;
}
`;

const Contents = styled.div`
  width: 100%;
  padding: 4rem 5%;
  min-height: 100vh;
  // background-color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &.active {
    animation: ${move} 2s ease forwards;
  }
`;

const SectionName = styled.p`
  width: 100%;
  font-size: 1.5rem;
  height: 4rem;
  // text-align: end;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  // background-color: aqua;
`;

const ContentsWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 12rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // background-color: orange;
`;

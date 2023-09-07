import React, { useEffect } from "react";

import styled, { keyframes } from "styled-components";

const SectionLayout = ({ bgStyle = {}, children, section }) => {
  return (
    <>
      <Container
        id={section.id}
        style={{
          zIndex: section.zIndex,
          ...bgStyle,
        }}
      >
        <Contents>{children}</Contents>
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
  min-height: 100vh;
  padding: 4rem 5%;
  // background-color: orange;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &.active {
    animation: ${move} 2s ease forwards;
  }
`;

import React, { useEffect } from "react";

import useScrollAnimation from "../hooks/useScrollAnimation";

import styled, { keyframes } from "styled-components";

const SectionLayout = ({ bgStyle = {}, children, section }) => {
  const { inView, ref } = useScrollAnimation();

  return (
    <>
      <Container id={section.id} ref={ref} style={bgStyle ? bgStyle : {}}>
        <Contents className={inView ? "view" : ""}>{children}</Contents>
      </Container>
    </>
  );
};

export default SectionLayout;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 4rem 5%;
`;

const move = keyframes`
0% {
  transform: translateY(-10%);
  opacity: 0;
}
100% {
  transform: translateY(0);
  opacity: 1;
}
`;

const Contents = styled.div`
  width: 100%;
  overflow-x: auto;
  // overflow-y: hidden;
  background-color: orange;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: static;
  opacity: 0;

  &.view {
    animation: ${move} 1.5s ease forwards;
    position: static;
  }
`;

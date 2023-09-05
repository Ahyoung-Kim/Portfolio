import React from "react";

import useScrollAnimation from "../hooks/useScrollAnimation";

import styled from "styled-components";

const SectionLayout = ({ bgStyle = {}, children, section }) => {
  const { inView, ref } = useScrollAnimation();

  return (
    <Container id={section.id} ref={ref} style={bgStyle ? bgStyle : {}}>
      <Contents className={inView ? "view" : ""}>{children}</Contents>
    </Container>
  );
};

export default SectionLayout;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
  padding: 4rem 5%;
`;

const Contents = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: auto;
  background-color: orange;
`;

import React from "react";

import styled from "styled-components";

import ProjectHead from "../../atomic/contents/ProjectHead";
import GrayLine from "../../atomic/contents/GrayLine";

const DetailContainer = ({ text, children }) => {
  return (
    <>
      <Container>
        <ProjectHead text={text} />

        <Contents>{children}</Contents>
      </Container>

      <GrayLine />
    </>
  );
};

export default DetailContainer;

const Container = styled.div`
  width: 100%;
  //   background-color: orange;
  padding: 10px 0;
`;

const Contents = styled.div`
  width: 100%;
  white-space: pre-wrap;
  line-height: 1.7rem;
  //   margin: 20px 0;
`;

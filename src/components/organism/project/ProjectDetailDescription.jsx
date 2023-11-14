import React from "react";

import DetailContainer from "./DetailContainer";
import Highlight from "../../atomic/contents/Highlight";
import styled from "styled-components";

const ProjectDetailDescription = ({ headText, text }) => {
  return (
    <DetailContainer text={headText}>
      <Text> {text}</Text>
    </DetailContainer>
  );
};

export default ProjectDetailDescription;

const Text = styled.p`
  font-size: 1rem;
  line-height: 2rem;
`;

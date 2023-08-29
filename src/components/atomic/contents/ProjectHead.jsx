import React from "react";

import styled from "styled-components";

const ProjectHead = ({ text }) => {
  return <Container className="bold-text">{text}</Container>;
};

export default ProjectHead;

const Container = styled.p`
  width: 100%;
  font-size: 1.3rem;
  padding: 0 0.6rem;
  border-left: 0.4rem solid black;
  margin-bottom: 0.6rem;
`;

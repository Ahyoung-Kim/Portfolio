import React from "react";
import styled from "styled-components";

const Highlight = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Highlight;

const Container = styled.span`
  display: inline-block;
  padding: 4px 6px;
  background-color: #f4f1e7;
  // font-size: 0.9rem;
  line-height: 1rem;
  color: #6b57e7;
  font-weight: bold;
  border-radius: 5px;
  margin: 0 0.5rem;
`;

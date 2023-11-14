import React from "react";
import styled from "styled-components";
import colors from "../../../common/colors";

const Highlight = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Highlight;

const Container = styled.span`
  display: inline-block;
  padding: 4px 6px;
  background-color: #f4eedd;
  // font-size: 0.9rem;
  line-height: 1rem;
  color: #6b57e7;
  // color: ${colors.COLOR_PINK};
  font-weight: bold;
  border-radius: 5px;
  margin: 0 0.3rem;
`;

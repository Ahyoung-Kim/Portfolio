import React from "react";
import styled from "styled-components";
import colors from "../../../common/colors";

const LeftBarContainer = ({
  children,
  margin = 0,
  lineHeight = "1rem",
  color = "black",
}) => {
  return (
    <Container style={{ margin, lineHeight, color }}>{children}</Container>
  );
};

export default LeftBarContainer;

const Container = styled.div`
  //   background-color: aqua;
  padding: 0 0.8rem;
  border-left: 0.4rem solid ${colors.COLOR_PINK};
  word-wrap: break-word;
`;

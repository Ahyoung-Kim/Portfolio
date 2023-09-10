import React from "react";

import styled from "styled-components";
import colors from "../../../common/colors";

const WhiteBox = ({
  children,
  width = "100%",
  margin = "0",
  padding = "1rem 2rem",
}) => {
  return <Container style={{ width, margin, padding }}>{children}</Container>;
};

export default WhiteBox;

const Container = styled.div`
  background-color: ${colors.COLOR_WHITE_TRANSPARENT_BACKGROUND};
  box-shadow: 10px 10px 20px ${colors.COLOR_BOX_SHADOW};
  border-radius: 8px;
`;

import React from "react";

import styled from "styled-components";
import colors from "../../../common/colors";

const WhiteBox = ({
  children,
  width = "100%",
  margin = "0",
  padding = "1rem 2rem",
  transparent = true,
}) => {
  return (
    <Container
      style={{
        width,
        margin,
        padding,
        backgroundColor: transparent
          ? colors.COLOR_WHITE_TRANSPARENT_BACKGROUND
          : "white",
      }}
    >
      {children}
    </Container>
  );
};

export default WhiteBox;

const Container = styled.div`
  box-shadow: 10px 10px 20px ${colors.COLOR_BOX_SHADOW};
  border-radius: 8px;
  position: relative;
`;

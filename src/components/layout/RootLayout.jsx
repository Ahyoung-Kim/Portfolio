import React from "react";
import styled from "styled-components";
import { navigationHeight, footerHeight } from "../../common/size";

const RootLayout = ({ children }) => {
  return <Container>{children}</Container>;
};

export default RootLayout;

const Container = styled.div`
  //   background-color: orange;
  // min-height: 100vh;
  min-height: calc(var(--vh, 1vh) * 100);
  // padding-top: ${navigationHeight};
  // padding-bottom: ${footerHeight};
  position: relative;
`;

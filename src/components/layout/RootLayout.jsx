import React from "react";
import styled from "styled-components";
import { navigationHeight } from "../../common/size";

const RootLayout = ({ children }) => {
  return <Container>{children}</Container>;
};

export default RootLayout;

const Container = styled.div`
  //   background-color: orange;
  min-height: 200vh;
  padding-top: ${navigationHeight};
  padding-bottom: 100px;
  position: relative;
`;

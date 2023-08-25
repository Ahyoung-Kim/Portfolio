import React from "react";
import styled from "styled-components";

const RootLayout = ({ children }) => {
  return <Container>{children}</Container>;
};

export default RootLayout;

const Container = styled.div`
  //   background-color: orange;
  min-height: 200vh;
  padding-top: 60px;
  padding-bottom: 100px;
  position: relative;
`;

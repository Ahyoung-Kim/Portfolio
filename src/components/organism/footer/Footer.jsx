import React from "react";
import styled from "styled-components";
import colors from "../../../common/colors";
import { footerHeight } from "../../../common/size";

const Footer = () => {
  return (
    <Container>
      <Copyright>ⓒ 2023. Ahyoung Kim. All rights reserved.</Copyright>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  width: 100%;
  height: ${footerHeight};
  background-color: ${colors.COLOR_FOOTER_BACKGROUND};
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Copyright = styled.p`
  font-size: 1rem;
  color: ${colors.COLOR_LIGHTGRAY_TEXT};
`;

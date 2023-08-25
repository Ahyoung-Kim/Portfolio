import React from "react";
import styled from "styled-components";
import colors from "../../../common/colors";

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
  height: 100px;
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

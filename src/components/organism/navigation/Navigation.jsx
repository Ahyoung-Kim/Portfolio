import React, { useEffect, useState } from "react";

import styled, { css } from "styled-components";
import colors from "../../../common/colors";

import HeaderText from "../../atomic/navigation/HeaderText";
import NavWrapper from "../../molecule/navigation/NavWrapper";

import { PC, Mobile } from "../../layout/MediaQuery";
import { minWidth } from "../../../common/size";

const Navigation = () => {
  return (
    <Container>
      <PC>
        <Inner>
          <HeaderText />

          <NavWrapper />
        </Inner>
      </PC>

      <Mobile>
        <HeaderText />
      </Mobile>
    </Container>
  );
};

export default Navigation;

const Container = styled.div`
  width: 100%;
  min-width: ${minWidth};
  height: 60px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  box-shadow: 0 5px 20px 0 ${colors.COLOR_BOX_SHADOW};
  background-color: white;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
`;

const Inner = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  min-width: 729px;
`;

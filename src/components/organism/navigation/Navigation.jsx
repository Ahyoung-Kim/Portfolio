import React, { useRef, useState } from "react";

import styled, { css } from "styled-components";
import colors from "../../../common/colors";

import { navigationHeight, minWidth } from "../../../common/size";
import { useMediaQueries } from "../../layout/MediaQuery";

import HeaderText from "../../atomic/navigation/HeaderText";
import NavWrapper from "../../molecule/navigation/NavWrapper";
import NavMenu from "../../molecule/navigation/NavMenu";

const Navigation = () => {
  const { isPc, isMobile, isTablet } = useMediaQueries();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Container>
      <Inner style={isPc ? { width: "80%", minWidth: "729px" } : {}}>
        <HeaderText />

        <NavWrapper setShowMenu={setShowMenu} />
      </Inner>

      {showMenu && <NavMenu showMenu={showMenu} setShowMenu={setShowMenu} />}
    </Container>
  );
};

export default Navigation;

const Container = styled.div`
  width: 100%;
  min-width: ${minWidth};
  padding: 0 20px;
  box-shadow: 0 5px 10px 0 ${colors.COLOR_BOX_SHADOW};
  background-color: white;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
`;

const Inner = styled.div`
  width: 100%;
  height: ${navigationHeight};
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: inherit;
`;

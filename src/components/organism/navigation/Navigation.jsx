import React, { useEffect, useState } from "react";

import styled from "styled-components";
import colors from "../../../common/colors";

import HeaderText from "../../atomic/navigation/HeaderText";
import NavWrapper from "../../molecule/navigation/NavWrapper";

import { PC, Mobile, Tablet, useMediaQueries } from "../../layout/MediaQuery";
import { minWidth, navigationHeight } from "../../../common/size";
import NavMenuButton from "../../atomic/navigation/NavMenuButton";
import NavMenu from "../../molecule/navigation/NavMenu";
import { useLocation } from "react-router-dom";

const Navigation = () => {
  const { isPc, isMobile, isTablet } = useMediaQueries();
  const [openMenu, setOpenMenu] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/" && !showNav) {
      setShowNav(true);
    } else if (location.pathname !== "/") {
      setShowNav(false);
    }
  }, [location.pathname]);

  return (
    <>
      <Container>
        {isPc ? (
          <>
            <Inner style={{ width: "80%", minWidth: "729px" }}>
              <HeaderText />

              {showNav && <NavWrapper />}
            </Inner>
          </>
        ) : isMobile || isTablet ? (
          <>
            <Inner>
              <HeaderText />

              {showNav && <NavMenuButton setOpenMenu={setOpenMenu} />}
            </Inner>

            <NavMenu setOpenMenu={setOpenMenu} openMenu={openMenu} />
          </>
        ) : null}
      </Container>
    </>
  );
};

export default Navigation;

const Container = styled.div`
  width: 100%;
  min-width: ${minWidth};
  padding-left: 20px;
  padding-right: 20px;
  // box-shadow: 0 5px 20px 0 ${colors.COLOR_BOX_SHADOW};
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
  width: 100%;
  height: ${navigationHeight};
`;

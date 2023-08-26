import React, { useState } from "react";

import styled from "styled-components";
import colors from "../../../common/colors";

import HeaderText from "../../atomic/navigation/HeaderText";
import NavWrapper from "../../molecule/navigation/NavWrapper";

import { PC, Mobile, Tablet } from "../../layout/MediaQuery";
import { minWidth, navigationHeight } from "../../../common/size";
import NavMenuButton from "../../atomic/navigation/NavMenuButton";
import NavMenu from "../../molecule/navigation/NavMenu";

const Navigation = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <Container>
        <PC>
          <Inner style={{ width: "80%", minWidth: "729px" }}>
            <HeaderText />

            <NavWrapper />
          </Inner>
        </PC>

        <Tablet>
          <Inner>
            <HeaderText />

            <NavMenuButton setOpenMenu={setOpenMenu} />
          </Inner>

          {openMenu && <NavMenu setOpenMenu={setOpenMenu} />}
        </Tablet>

        <Mobile>
          <Inner>
            <HeaderText />

            <NavMenuButton setOpenMenu={setOpenMenu} />
          </Inner>

          {openMenu && <NavMenu setOpenMenu={setOpenMenu} />}
        </Mobile>
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
  width: 100%;
  height: ${navigationHeight};
`;

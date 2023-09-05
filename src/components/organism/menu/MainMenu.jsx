import React, { useState } from "react";

import styled from "styled-components";
import colors from "../../../common/colors";

import MenuButton from "../../atomic/menu/MenuButton";
import MenuText from "../../atomic/menu/MenuText";
import SubMenu from "./SubMenu";

const MainMenu = ({ moveToSection }) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Container>
      <MenuText />
      <MenuButton onClick={() => setOpenMenu(true)} />

      {openMenu && (
        <SubMenu setOpenMenu={setOpenMenu} moveToSection={moveToSection} />
      )}
    </Container>
  );
};

export default MainMenu;

const Container = styled.div`
  width: 100%;
  height: 4rem;
  position: fixed;
  top: 0;
  left: 0;
  //   background-color: aqua;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  color: ${colors.COLOR_PINK};
`;

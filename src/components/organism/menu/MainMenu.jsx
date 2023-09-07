import React, { useState } from "react";

import styled from "styled-components";
import colors from "../../../common/colors";

import MenuButton from "../../atomic/menu/MenuButton";
import MenuText from "../../atomic/menu/MenuText";
import SubMenu from "./SubMenu";

const MainMenu = ({ moveToSection, openMenu, setOpenMenu }) => {
  // const [openMenu, setOpenMenu] = useState(false);

  const onClickText = (e) => {
    moveToSection(0);
  };

  const onClickButton = (e) => {
    setOpenMenu(true);
  };

  return (
    <Container>
      <MenuText onClick={onClickText} />
      <MenuButton onClick={onClickButton} />

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
  z-index: 12;
  top: 0;
  left: 0;
  // background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  color: ${colors.COLOR_PINK};
`;

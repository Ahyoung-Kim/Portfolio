import React, { useEffect, useRef, useState } from "react";

import styled, { keyframes } from "styled-components";
import colors from "../../../common/colors";

import SectionList from "../../../constants/SectionList";
import SubMenuText from "../../atomic/menu/SubMenuText";

const SubMenu = ({ setOpenMenu, moveToSection }) => {
  const [slideIn, setSlideIn] = useState(true);

  const closeMenu = (callback) => {
    setSlideIn(false);
    setTimeout(() => {
      setOpenMenu(false);
    }, 500);
  };

  const onBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      closeMenu();
    }
  };

  const onTextClick = (index) => {
    closeMenu();
    moveToSection(index);
  };

  return (
    <>
      <Container onClick={onBackgroundClick} />
      <Menu className={slideIn ? "slideIn" : "slideOut"}>
        <MenuWrapper>
          {Object.keys(SectionList).map((key, index) => (
            <SubMenuText
              key={`sub_${key}`}
              section={SectionList[key]}
              index={index}
              onClick={onTextClick.bind(this, index)}
            />
          ))}
        </MenuWrapper>
      </Menu>
    </>
  );
};

export default SubMenu;

const slideIn = keyframes`
from {
    transform: translateX(100%);
}
to {
    transform: translateX(0);
}
`;

const slideOut = keyframes`
from {
    transform: translateX(0);
}
to {
    transform: translateX(100%);
}
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.1);
`;

const Menu = styled.div`
  width: max-content;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  background: linear-gradient(180deg, #f048c1 25.5%, #b200cf 84.5%);

  &.slideIn {
    animation: ${slideIn} 0.5s ease;
  }
  &.slideOut {
    animation: ${slideOut} 0.5s ease forwards;
  }
`;

const MenuWrapper = styled.div`
  // background-color: orange;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 5rem 6rem 0 4rem;
`;

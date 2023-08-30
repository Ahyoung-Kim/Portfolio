import React, { useEffect } from "react";

import colors from "../../../common/colors";
import styled, { css, keyframes } from "styled-components";
import NavigationType from "../../../constants/NavigationType";
import NavText from "../../atomic/navigation/NavText";
import useMoveScroll from "../../hooks/useMoveScroll";

const NavMenu = ({ showMenu, setShowMenu }) => {
  const onMove = useMoveScroll();

  return (
    <Container>
      <DropDown>
        {Object.keys(NavigationType).map((key) => (
          <NavText
            key={`navsmall_${key}`}
            text={NavigationType[key]}
            onClick={() => {
              onMove(NavigationType[key]);
              setShowMenu(false);
            }}
          />
        ))}
      </DropDown>
    </Container>
  );
};

export default NavMenu;

const Container = styled.div`
  width: 100%;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  overflow: hidden;
  padding-bottom: 15px;
`;

const dropDown = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
    box-shadow: 0 5px 10px 0 ${colors.COLOR_BOX_SHADOW};
  }
`;

const DropDown = styled.div`
  background-color: white;
  padding: 20px;
  animation: ${dropDown} 0.5s ease forwards;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

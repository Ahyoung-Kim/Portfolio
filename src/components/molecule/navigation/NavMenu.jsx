import React, { useEffect } from "react";

import colors from "../../../common/colors";
import styled, { css } from "styled-components";
import NavigationType from "../../../constants/NavigationType";
import NavText from "../../atomic/navigation/NavText";
import useMoveScroll from "../../hooks/useMoveScroll";

const NavMenu = ({ setOpenMenu, openMenu }) => {
  const onMove = useMoveScroll();

  return (
    <Container style={{ display: openMenu ? "flex" : "none" }}>
      {Object.keys(NavigationType).map((type) => (
        <Text
          key={type}
          onClick={() => {
            setOpenMenu(false);
            onMove(NavigationType[type]);
          }}
        >
          {NavigationType[type]}
        </Text>
      ))}
    </Container>
  );
};

export default NavMenu;

const Container = styled.div`
  width: 100%;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: -1;
  background-color: inherit;
  // box-shadow: inherit;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding-bottom: 10px;
  overflow: hidden;

  // @keyframes open {
  //   0% {
  //     transform: translateY(-100%);
  //   }
  //   100% {
  //     transform: translateY(0);
  //   }
  // }
  // @keyframes close {
  //   0% {
  //     transform: translateY(0);
  //   }
  //   100% {
  //     transform: translateY(-100%);
  //   }
  // }
  // animation: ${({ openMenu }) => `${openMenu} 0.5s ease`};
`;

const Text = styled.p`
  font-weight: bold;
  color: ${colors.COLOR_NAV_TEXT};
  font-size: 0.8rem;
  cursor: pointer;
  //   background-color: orange;
  width: 33%;
  text-align: center;
  margin: 5px 0;
  text-decoration: underline;
`;

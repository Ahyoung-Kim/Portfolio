import React from "react";

import colors from "../../../common/colors";
import styled from "styled-components";
import NavigationType from "../../../constants/NavigationType";
import NavText from "../../atomic/navigation/NavText";
import useMoveScroll from "../../hooks/useMoveScroll";

const NavMenu = ({ setOpenMenu }) => {
  const onMove = useMoveScroll();

  return (
    <Container>
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
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding-bottom: 10px;
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

import React from "react";

import styled from "styled-components";

import NavText from "../../atomic/navigation/NavText";

import NavigationType from "../../../constants/NavigationType";
import useMoveScroll from "../../hooks/useMoveScroll";

const NavWrapper = () => {
  const onMove = useMoveScroll();

  return (
    <Container>
      {Object.keys(NavigationType).map((key) => (
        <NavText
          key={`nav_${key}`}
          text={NavigationType[key]}
          onClick={() => {
            onMove(NavigationType[key]);
          }}
        />
      ))}
    </Container>
  );
};

export default NavWrapper;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

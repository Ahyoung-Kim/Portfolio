import React from "react";

import styled from "styled-components";

import NavText from "../../atomic/navigation/NavText";

import NavigationType from "../../../constants/NavigationType";
import useMoveScroll from "../../hooks/useMoveScroll";
import { useMediaQueries } from "../../layout/MediaQuery";
import NavMenuButton from "../../atomic/navigation/NavMenuButton";

const NavWrapper = ({ setShowMenu }) => {
  const onMove = useMoveScroll();
  const { isPc } = useMediaQueries();

  const onNavMenuButtonClick = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <Container>
      {isPc ? (
        <>
          {Object.keys(NavigationType).map((key) => (
            <NavText
              key={`nav_${key}`}
              text={NavigationType[key]}
              onClick={() => {
                onMove(NavigationType[key]);
              }}
            />
          ))}
        </>
      ) : (
        <>
          <NavMenuButton onClick={onNavMenuButtonClick} />
        </>
      )}
    </Container>
  );
};

export default NavWrapper;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

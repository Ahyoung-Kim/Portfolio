import React from "react";

import styled from "styled-components";
import colors from "../../../common/colors";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavMenuButton = ({ onClick }) => {
  return (
    <>
      <IconButton onClick={onClick}>
        <FontAwesomeIcon icon={faBars} />
      </IconButton>
    </>
  );
};

export default NavMenuButton;

const IconButton = styled.div`
  border-radius: 100%;
  border: 1px solid ${colors.COLOR_GRAY_BORDER};
  cursor: pointer;
  font-size: 1rem;
  color: ${colors.COLOR_GRAY_TEXT};
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

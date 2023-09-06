import React from "react";

import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const MenuButton = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <FontAwesomeIcon icon={faBars} />
    </Button>
  );
};

export default MenuButton;

const Button = styled.div`
  font-size: 1.3rem;
  cursor: pointer;
`;

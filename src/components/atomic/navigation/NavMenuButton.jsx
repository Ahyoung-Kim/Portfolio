import React from "react";

import { Menu } from "@material-ui/icons";
import styled from "styled-components";
import colors from "../../../common/colors";

const NavMenuButton = ({ setOpenMenu }) => {
  return (
    <>
      <IconButton onClick={() => setOpenMenu((prev) => !prev)}>
        <Menu style={{ fontSize: "20px", color: colors.COLOR_NAV_TEXT }} />
      </IconButton>
    </>
  );
};

export default NavMenuButton;

const IconButton = styled.div`
  padding: 3px;
  border-radius: 100%;
  border: 1px solid ${colors.COLOR_GRAY_BORDER};
  cursor: pointer;
`;

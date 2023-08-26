import React from "react";

import styled from "styled-components";
import colors from "../../../common/colors";

const NavText = ({ text, onClick }) => {
  return <Text onClick={onClick}>{text}</Text>;
};

export default NavText;

const Text = styled.p`
  font-weight: bold;
  color: ${colors.COLOR_NAV_TEXT};
  margin-left: 20px;
  font-size: 0.8rem;
  cursor: pointer;
`;

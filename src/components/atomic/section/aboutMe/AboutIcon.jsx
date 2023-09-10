import React from "react";

import colors from "../../../../common/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Regular from "@fortawesome/free-regular-svg-icons";
import * as Solid from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const AboutIcon = ({ icon, color = colors.COLOR_PINK, isRegular }) => {
  const _icon = isRegular
    ? Regular[icon]
    : Solid[icon]
    ? Solid[icon]
    : Regular[icon];

  if (!icon) return;

  return (
    <Container>
      <FontAwesomeIcon icon={_icon} color={color} />
    </Container>
  );
};

export default AboutIcon;

const Container = styled.div`
  // background-color: orange;
  font-size: 0.8rem;
  width: 1rem;
  text-align: center;
`;

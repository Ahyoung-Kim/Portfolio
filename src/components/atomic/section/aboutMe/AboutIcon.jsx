import React from "react";

import colors from "../../../../common/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Regular from "@fortawesome/free-regular-svg-icons";
import * as Solid from "@fortawesome/free-solid-svg-icons";

const AboutIcon = ({ icon, color = colors.COLOR_PINK, isRegular }) => {
  const _icon = isRegular
    ? Regular[icon]
    : Solid[icon]
    ? Solid[icon]
    : Regular[icon];

  if (!icon) return;

  return (
    <>
      <FontAwesomeIcon icon={_icon} color={color} />
    </>
  );
};

export default AboutIcon;

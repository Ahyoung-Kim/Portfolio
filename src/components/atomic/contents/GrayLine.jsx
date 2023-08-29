import React from "react";

import styled from "styled-components";
import colors from "../../../common/colors";

const GrayLine = () => {
  return <GrayLineDiv />;
};

export default GrayLine;

const GrayLineDiv = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${colors.COLOR_GRAY_BORDER};
  margin: 1rem 0;
`;

import React from "react";

import colors from "../../../../common/colors";
import styled from "styled-components";

const AboutMeBox = () => {
  return <Container></Container>;
};

export default AboutMeBox;

const Container = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${colors.COLOR_WHITE_TRANSPARENT_BACKGROUND};
  box-shadow: 10px 10px 20px ${colors.COLOR_BOX_SHADOW};
  border-radius: 8px;
  margin-top: 2rem;
  padding: 1rem;
`;

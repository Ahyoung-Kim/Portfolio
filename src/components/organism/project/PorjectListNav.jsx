import React from "react";

import styled from "styled-components";
import colors from "../../../common/colors";

import { useMediaQueries } from "../../layout/MediaQuery";

const PorjectListNav = () => {
  const { isMobile, isPc, isTablet } = useMediaQueries();

  return <Container style={{}}></Container>;
};

export default PorjectListNav;

const Container = styled.div`
  background-color: orange;
  width: 100%;
  height: 100%;
`;

import React from "react";

import colors from "../../../../common/colors";
import styled from "styled-components";
import AboutItem from "../../../molecule/section/aboutMe/AboutItem";

const AboutMeBox = ({}) => {
  return (
    <Container>
      <AboutItem icon={"faUser"} text={"김아영"} />
      <AboutItem icon={"faCakeCandles"} text={"99.08.27"} />
      <AboutItem icon={"faLocationDot"} text={"경기도 평택시"} />
      <AboutItem icon={"faSquarePhone"} text={"010-6595-0827"} />
      <AboutItem icon={"faEnvelope"} text={"eileel@naver.com"} />
      <AboutItem
        icon={"faGraduationCap"}
        text={"서강대학교 - 컴퓨터공학 학사"}
      />
    </Container>
  );
};

export default AboutMeBox;

const Container = styled.div`
  width: 100%;
  background-color: ${colors.COLOR_WHITE_TRANSPARENT_BACKGROUND};
  box-shadow: 10px 10px 20px ${colors.COLOR_BOX_SHADOW};
  border-radius: 8px;
  margin-top: 2rem;
  padding: 1rem 2rem;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  // gap: 1rem;
`;

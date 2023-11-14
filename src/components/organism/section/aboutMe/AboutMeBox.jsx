import React from "react";

import colors from "../../../../common/colors";
import styled from "styled-components";

import WhiteBox from "../../../atomic/common/WhiteBox";
import AboutItem from "../../../molecule/section/aboutMe/AboutItem";

const AboutMeBox = ({}) => {
  return (
    <WhiteBox margin="2rem 0 0">
      <Container>
        <AboutItem icon={"faUser"} text={"김아영"} />
        <AboutItem icon={"faCakeCandles"} text={"1999.08.27"} />
        <AboutItem icon={"faLocationDot"} text={"경기도 평택시"} />
        <AboutItem icon={"faSquarePhone"} text={"010-6595-0827"} />
        <AboutItem icon={"faEnvelope"} text={"eileel@naver.com"} />
        <AboutItem
          icon={"faGraduationCap"}
          text={"서강대학교 - 컴퓨터공학 학사"}
        />
      </Container>
    </WhiteBox>
  );
};

export default AboutMeBox;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

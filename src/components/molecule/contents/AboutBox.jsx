import React from "react";

import AboutText from "../../atomic/contents/AboutText";

import styled from "styled-components";
import colors from "../../../common/colors";

import {
  faUser,
  faCakeCandles,
  faLocationDot,
  faSquarePhone,
  faEnvelope,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

const AboutBox = () => {
  return (
    <>
      <Container>
        <AboutText text="김아영" icon={faUser} />
        <AboutText text="99.08.27" icon={faCakeCandles} />
        <AboutText text="경기도 평택시" icon={faLocationDot} />
        <AboutText text="010-6595-0827" icon={faSquarePhone} />
        <AboutText text="eileel@naver.com" icon={faEnvelope} />
        <AboutText
          text="컴퓨터공학 학사"
          smallText={"서강대학교"}
          icon={faGraduationCap}
        />
      </Container>
    </>
  );
};

export default AboutBox;

const Container = styled.div`
  background-color: white;
  box-shadow: 5px 5px 10px ${colors.COLOR_BOX_SHADOW};
  border-radius: 5px;
  padding: 1.2rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

import React from "react";

import AboutText from "../../atomic/contents/AboutText";

import {
  Person,
  Cake,
  Room,
  School,
  PhoneIphone,
  Email,
} from "@mui/icons-material";
import styled from "styled-components";
import colors from "../../../common/colors";

const iconStyle = {
  fontSize: "2rem",
};

const AboutBox = () => {
  return (
    <>
      <Container>
        <AboutText text="김아영" icon={<Person style={iconStyle} />} />
        <AboutText text="99.08.27" icon={<Cake style={iconStyle} />} />
        <AboutText text="경기도 평택시" icon={<Room style={iconStyle} />} />
        <AboutText
          text="010-6595-0827"
          icon={<PhoneIphone style={iconStyle} />}
        />
        <AboutText text="eileel@naver.com" icon={<Email style={iconStyle} />} />
        <AboutText
          text="컴퓨터공학 학사"
          smallText={"서강대학교"}
          icon={<School style={iconStyle} />}
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

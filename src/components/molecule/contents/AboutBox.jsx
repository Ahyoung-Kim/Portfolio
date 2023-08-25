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
import { Mobile, PC } from "../../layout/MediaQuery";

const iconStyle = {
    fontSize: "30px"
}

const AboutBox = () => {
  return (
    <>
      <Container>
        <PC>
          <Wrapper>
            <AboutText text="김아영" icon={<Person style={iconStyle} />} />
            <AboutText text="99.08.27" icon={<Cake style={iconStyle} />} />
            <AboutText text="경기도 평택시" icon={<Room style={iconStyle} />} />
          </Wrapper>
          <Wrapper>
            <AboutText text="010-6595-0827" icon={<PhoneIphone style={iconStyle} />} />
            <AboutText text="eileel@naver.com" icon={<Email style={iconStyle} />} />
            <AboutText
              text="컴퓨터공학 학사"
              smallText={"서강대학교"}
              icon={<School />}
            />
          </Wrapper>
        </PC>

        <Mobile>
          <AboutText text="김아영" icon={<Person style={iconStyle} />} />
          <AboutText text="99.08.27" icon={<Cake style={iconStyle} />} />
          <AboutText text="경기도 평택시" icon={<Room style={iconStyle} />} />
          <AboutText text="010-6595-0827" icon={<PhoneIphone style={iconStyle} />} />
          <AboutText text="eileel@naver.com" icon={<Email style={iconStyle} />} />
          <AboutText
            text="컴퓨터공학 학사"
            smallText={"서강대학교"}
            icon={<School style={iconStyle} />}
          />
        </Mobile>
      </Container>
    </>
  );
};

export default AboutBox;

const Container = styled.div`
  background-color: white;
  box-shadow: 5px 5px 10px ${colors.COLOR_BOX_SHADOW};
  border-radius: 5px;
  padding: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 900px;
  margin: 20px 0;
`;

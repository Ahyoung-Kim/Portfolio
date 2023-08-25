import React from "react";

import ContentsLayout from "../../layout/ContentsLayout";
import ContentsHead from "../../atomic/contents/ContentsHead";
import NavigationType from "../../../constants/NavigationType";
import AboutBox from "../../molecule/contents/AboutBox";

const AboutMe = () => {
  return (
    <ContentsLayout bgColor="white">
      <ContentsHead text={NavigationType.ABOUT_ME} />

      <AboutBox />
    </ContentsLayout>
  );
};

export default AboutMe;

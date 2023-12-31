import React from "react";

import styled from "styled-components";

import SectionList from "../../../constants/SectionList";
import { PUBLIC_URL } from "../../../common/config";
import { useMediaQueries } from "../../layout/MediaQuery";

import SectionLayout from "../../layout/SectionLayout";
import ProfileImage from "../../atomic/section/aboutMe/ProfileImage";
import InformationText from "../../organism/section/aboutMe/InformationText";
import AboutMeBox from "../../organism/section/aboutMe/AboutMeBox";

const AboutMeSection = () => {
  const { isPc, isMobile, isTablet } = useMediaQueries();

  return (
    <SectionLayout
      section={SectionList.ABOUT_ME}
      bgStyle={{
        background: "linear-gradient(to right, #fbc7d4, #9796f0)",
      }}
    >
      <Wrapper
        style={isPc ? { flexDirection: "row" } : { flexDirection: "column" }}
      >
        <ProfileImage />

        <InformationWrapper
          style={
            isPc
              ? {
                  marginLeft: "5%",
                  width: "65%",
                }
              : { width: "100%", marginTop: "5%" }
          }
        >
          <InformationText />

          <AboutMeBox />
        </InformationWrapper>
      </Wrapper>
    </SectionLayout>
  );
};

export default AboutMeSection;

const Wrapper = styled.div`
  // background-color: orange;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const InformationWrapper = styled.div`
  // background-color: orange;
`;

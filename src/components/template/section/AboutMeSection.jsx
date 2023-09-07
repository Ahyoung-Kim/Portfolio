import React from "react";

import styled from "styled-components";

import SectionList from "../../../constants/SectionList";
import { PUBLIC_URL } from "../../../common/config";
import { useMediaQueries } from "../../layout/MediaQuery";

import SectionLayout from "../../layout/SectionLayout";
import ProfileImage from "../../atomic/section/information/ProfileImage";
import InformationText from "../../atomic/section/information/InformationText";
import LeftBarContainer from "../../atomic/common/LeftBarContainer";
import colors from "../../../common/colors";

const AboutMeSection = () => {
  const { isPc, isMobile, isTablet } = useMediaQueries();

  return (
    <SectionLayout
      section={SectionList.ABOUT_ME}
      bgStyle={{
        backgroundImage: `url(${PUBLIC_URL}/img/sky.jpeg)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        backgroundSize: "cover",
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
                  width: "60%",
                }
              : { width: "100%", marginTop: "5%" }
          }
        >
          <InformationText />

          <LeftBarContainer
            margin="2rem 0"
            lineHeight="1.5rem"
            color={colors.COLOR_GRAY_TEXT}
          >
            hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello
          </LeftBarContainer>
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

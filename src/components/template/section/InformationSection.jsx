import React from "react";

import styled from "styled-components";

import SectionList from "../../../constants/SectionList";
import { PUBLIC_URL } from "../../../common/config";
import { useMediaQueries } from "../../layout/MediaQuery";

import SectionLayout from "../../layout/SectionLayout";
import ProfileImage from "../../atomic/section/information/ProfileImage";
import InformationText from "../../atomic/section/information/InformationText";

const InformationSection = () => {
  const { isPc, isMobile, isTablet } = useMediaQueries();

  return (
    <SectionLayout
      section={SectionList.INFORMATION}
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

        <InformationText />
      </Wrapper>
    </SectionLayout>
  );
};

export default InformationSection;

const Wrapper = styled.div`
  // background-color: orange;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;

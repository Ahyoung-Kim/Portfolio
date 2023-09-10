import React from "react";

import styled from "styled-components";
import colors from "../../../common/colors";

import SectionList from "../../../constants/SectionList";
import { PUBLIC_URL } from "../../../common/config";
import { useMediaQueries } from "../../layout/MediaQuery";

import SectionLayout from "../../layout/SectionLayout";
import ProfileImage from "../../atomic/section/aboutMe/ProfileImage";
import InformationText from "../../organism/section/aboutMe/InformationText";

const InformationSection = () => {
  const { isPc, isMobile, isTablet } = useMediaQueries();

  return (
    <SectionLayout
      section={SectionList.INFORMATION}
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
        </InformationWrapper>
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

const InformationWrapper = styled.div`
  // background-color: orange;
`;

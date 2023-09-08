import React from "react";

import styled from "styled-components";
import colors from "../../../common/colors";

import SectionList from "../../../constants/SectionList";
import SectionLayout from "../../layout/SectionLayout";

const SkillsSection = () => {
  return (
    <SectionLayout
      section={SectionList.SKILLS}
      bgStyle={{
        backgroundColor: "white",
        // backgroundColor: colors.COLOR_MINT_BACKGROUND,
        // background: `linear-gradient(45deg, #f048c1 25.5%, ${colors.COLOR_GRAY_BACKGROUND} 84.5%)`,
      }}
    ></SectionLayout>
  );
};

export default SkillsSection;

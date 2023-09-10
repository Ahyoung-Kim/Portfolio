import React from "react";

import styled from "styled-components";
import colors from "../../../common/colors";
import { PUBLIC_URL } from "../../../common/config";

import SectionList from "../../../constants/SectionList";
import SectionLayout from "../../layout/SectionLayout";
import SkillList from "../../organism/section/skills/SkillList";

const SkillsSection = () => {
  return (
    <SectionLayout
      section={SectionList.SKILLS}
      bgStyle={{
        backgroundColor: "white",
        backgroundImage: `url(${PUBLIC_URL}/img/light-background.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        backgroundSize: "cover",
      }}
    >
      <SkillList />
    </SectionLayout>
  );
};

export default SkillsSection;

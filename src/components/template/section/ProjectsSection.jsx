import React from "react";

import styled from "styled-components";
import colors from "../../../common/colors";

import SectionList from "../../../constants/SectionList";
import SectionLayout from "../../layout/SectionLayout";

const ProjectsSection = () => {
  return (
    <SectionLayout
      section={SectionList.PROJECTS}
      bgStyle={{ backgroundColor: colors.COLOR_LAVENDAR_BACKGROUND }}
    ></SectionLayout>
  );
};

export default ProjectsSection;

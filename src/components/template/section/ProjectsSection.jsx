import React from "react";

import styled from "styled-components";
import colors from "../../../common/colors";

import SectionList from "../../../constants/SectionList";
import SectionLayout from "../../layout/SectionLayout";
import ProjectCarousel from "../../organism/section/projects/ProjectCarousel";

const ProjectsSection = () => {
  return (
    <SectionLayout
      section={SectionList.PROJECTS}
      bgStyle={{ backgroundColor: "black" }}
      justifyContent="flex-start"
    >
      <ProjectCarousel />
    </SectionLayout>
  );
};

export default ProjectsSection;

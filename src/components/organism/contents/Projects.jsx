import React from "react";

import styled from "styled-components";
import colors from "../../../common/colors";

import ContentsLayout from "../../layout/ContentsLayout";
import ContentsHead from "../../atomic/contents/ContentsHead";
import NavigationType from "../../../constants/NavigationType";
import ProjectBox from "../../molecule/contents/ProjectBox";

const Projects = () => {
  return (
    <ContentsLayout
      contentId={NavigationType.PROJECTS}
      bgColor={colors.COLOR_LAVENDAR_BACKGROUND}
    >
      <ContentsHead text={NavigationType.PROJECTS} />

      <Contents>
        <ProjectBox />

        <ProjectBox />
      </Contents>
    </ContentsLayout>
  );
};

export default Projects;

const Contents = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
`;

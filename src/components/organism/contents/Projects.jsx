import React from "react";

import styled from "styled-components";
import colors from "../../../common/colors";

import ContentsLayout from "../../layout/ContentsLayout";
import ContentsHead from "../../atomic/contents/ContentsHead";
import NavigationType from "../../../constants/NavigationType";

const Projects = () => {
  return (
    <ContentsLayout
      contentId={NavigationType.PROJECTS}
      bgColor={colors.COLOR_LAVENDAR_BACKGROUND}
    >
      <ContentsHead text={NavigationType.PROJECTS} />
    </ContentsLayout>
  );
};

export default Projects;

import React from "react";

import styled from "styled-components";

import { useMediaQueries } from "../../layout/MediaQuery";
import MonitorImage from "../../atomic/contents/MonitorImage";
import ProjectDescription from "./ProjectDescription";
import GrayLine from "../../atomic/contents/GrayLine";
import ProjectSkills from "./ProjectSkills";
import ProjectTitleBox from "./ProjectTitleBox";
import GithubLink from "../../atomic/contents/GithubLink";

const ProjectBox = () => {
  const { isMobile } = useMediaQueries();

  return (
    <>
      <Container style={isMobile ? { flexDirection: "column" } : null}>
        <ProjectTitleBox />

        <ImageBox
          style={
            isMobile
              ? { width: "70%", alignSelf: "center", marginBottom: "1rem" }
              : null
          }
        >
          <MonitorImage />
        </ImageBox>

        <DescriptionBox style={isMobile ? { width: "100%" } : null}>
          <ProjectDescription />

          <GrayLine />

          <ProjectSkills />

          <GithubLink />
        </DescriptionBox>
      </Container>
    </>
  );
};

export default ProjectBox;

const Container = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 5px;
  cursor: pointer;
  padding: 1.5rem;
  margin-bottom: 1rem;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ImageBox = styled.div`
  width: 40%;
`;

const DescriptionBox = styled.div`
  width: 58%;
`;

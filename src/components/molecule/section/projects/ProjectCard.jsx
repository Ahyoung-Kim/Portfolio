import React from "react";
import styled from "styled-components";

import ProjectDescription from "../../contents/ProjectDescription";
import GrayLine from "../../../atomic/contents/GrayLine";
import ProjectSkills from "../../contents/ProjectSkills";
import GithubLink from "../../../atomic/contents/GithubLink";
import MonitorImage from "../../../atomic/contents/MonitorImage";
import { PUBLIC_URL } from "../../../../common/config";

const ProjectCard = () => {
  return (
    <Container>
      <Image src={`${PUBLIC_URL}/img/monitor-pc.png`} />

      <ProjectDescription />

      <GrayLine />

      <ProjectSkills />

      <GithubLink />
    </Container>
  );
};

export default ProjectCard;

const Container = styled.div`
  width: 100%;
  padding: 2rem;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  margin-bottom: 1rem;
`;

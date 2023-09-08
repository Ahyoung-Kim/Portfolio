import React from "react";

import styled from "styled-components";
import colors from "../../../common/colors";

import GrayLine from "../../atomic/contents/GrayLine";
import { useMediaQueries } from "../../layout/MediaQuery";
import MonitorImage from "../../atomic/contents/MonitorImage";
import ProjectDescription from "../../molecule/contents/ProjectDescription";
import DetailContainer from "./DetailContainer";
import ProjectDetailDescription from "./ProjectDetailDescription";
import ProjectLink from "./ProjectLink";
import ProjectDetailSkills from "./ProjectDetailSkills";

const ProjectDetail = () => {
  const { isPc, isTablet } = useMediaQueries();

  return (
    <Container>
      <Title className="bold-text">프로젝트 이름</Title>

      <GrayLine />

      <ImageBox style={isPc || isTablet ? { width: "60%" } : { width: "100%" }}>
        <MonitorImage />
      </ImageBox>

      <GrayLine />

      <ProjectDescription />

      <GrayLine />

      <ProjectDetailDescription headText={"프로젝트 설명"} />

      <ProjectDetailDescription headText={"프로젝트 배경"} />

      <ProjectDetailDescription headText={"Issues"} />

      <ProjectDetailSkills />

      <ProjectLink
        headText="Github Link"
        link={"https://github.com/Ahyoung-Kim"}
      />

      <ProjectLink
        headText="Deployment Link"
        link={"https://github.com/Ahyoung-Kim"}
      />

      <ProjectLink
        headText="시연 영상"
        link={"https://github.com/Ahyoung-Kim"}
      />
    </Container>
  );
};

export default ProjectDetail;

const Container = styled.div`
  width: 100%;
  // min-height: 100vh;
  min-height: calc(var(--vh, 1vh) * 100);
  //   background-color: aqua;
  padding: 5%;
`;

const Title = styled.div`
  font-size: 1.8rem;
`;

const ImageBox = styled.div`
  margin: 0 auto;
`;

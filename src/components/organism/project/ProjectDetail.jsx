import React from "react";

import styled from "styled-components";
import colors from "../../../common/colors";

import GrayLine from "../../atomic/contents/GrayLine";
import { useMediaQueries } from "../../layout/MediaQuery";
import ProjectDescription from "../../molecule/contents/ProjectDescription";
import DetailContainer from "./DetailContainer";
import ProjectDetailDescription from "./ProjectDetailDescription";
import ProjectLink from "./ProjectLink";
import ProjectDetailSkills from "./ProjectDetailSkills";
import ImageCarousel from "../../molecule/contents/ImageCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const ProjectDetail = ({ data }) => {
  const { isPc, isTablet } = useMediaQueries();

  const onClickBack = () => {
    window.location.replace("/");
  };

  return (
    <Container>
      <TitleDiv>
        <BackButton onClick={onClickBack}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </BackButton>

        <Title className="bold-text">{data.name}</Title>
      </TitleDiv>

      <GrayLine />

      <ImageBox style={isPc || isTablet ? { width: "60%" } : { width: "100%" }}>
        <ImageCarousel images={data.images} mobile={data.mobile} />
      </ImageBox>

      <GrayLine />

      <ProjectDescription data={data} />

      <GrayLine />

      <ProjectDetailDescription
        headText={"프로젝트 설명"}
        text={data.description}
      />

      <ProjectDetailDescription
        headText={"프로젝트 배경"}
        text={data.background}
      />

      {/* <ProjectDetailDescription headText={"Issues"} /> */}

      <ProjectDetailSkills stacks={data.stacks} projectId={data.id} />

      <ProjectLink headText="Github Link" link={data.github} />

      <ProjectLink headText="Deployment Link" link={data.link} />

      <ProjectLink headText="시연 영상" link={data.video} />
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

const TitleDiv = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.8rem;
`;

const BackButton = styled.div`
  margin-right: 0.5rem;
  padding: 0 0.5rem;
  // background-color: orange;
  cursor: pointer;
`;

const Title = styled.div`
  font-size: 1.8rem;
`;

const ImageBox = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

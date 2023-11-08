import React from "react";
import styled from "styled-components";

import ProjectDescription from "../../contents/ProjectDescription";
import GrayLine from "../../../atomic/contents/GrayLine";
import ProjectSkills from "../../contents/ProjectSkills";
import GithubLink from "../../../atomic/contents/GithubLink";
import MonitorImage from "../../../atomic/contents/MonitorImage";
import { PROJECTS_URL, PUBLIC_URL } from "../../../../common/config";
import { useMediaQueries } from "../../../layout/MediaQuery";
import { useNavigate } from "react-router-dom";

const ProjectImage = ({ src, mobile }) => {
  const { isPc } = useMediaQueries();

  return (
    <>
      <Image
        style={mobile ? { width: "35%" } : isPc ? { width: "70%" } : {}}
        src={src ? `${PROJECTS_URL}/${src}` : `${PUBLIC_URL}/img/page-pc.png`}
      />
    </>
  );
};

const ProjectCard = ({ data }) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(`/projects/${data.id}`);
  };

  return (
    <Container>
      <ImageDiv onClick={onClick}>
        <ProjectImage src={data.images[0]} mobile={data.mobile} />
      </ImageDiv>

      <ProjectDescription data={data} />

      <GrayLine />

      <ProjectSkills stacks={data.stacks} id={data.id} />

      {data.github && <GithubLink link={data.github} />}
    </Container>
  );
};

export default ProjectCard;

const Container = styled.div`
  width: 100%;
  padding: 2rem;
`;

const ImageDiv = styled.div`
  width: 100%;
  text-align: center;
  // background-color: orange;
`;

const Image = styled.img`
  width: 100%;
  margin-bottom: 1rem;
  object-fit: contain;
  display: inline-block;
  border: 0.6rem solid black;
  border-radius: 0.6rem;
`;

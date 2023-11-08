import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

import ProjectDescription from "../../contents/ProjectDescription";
import GrayLine from "../../../atomic/contents/GrayLine";
import ProjectSkills from "../../contents/ProjectSkills";
import GithubLink from "../../../atomic/contents/GithubLink";
import MonitorImage from "../../../atomic/contents/MonitorImage";
import { PROJECTS_URL, PUBLIC_URL } from "../../../../common/config";
import { useMediaQueries } from "../../../layout/MediaQuery";
import { useNavigate } from "react-router-dom";
import colors from "../../../../common/colors";

const ProjectImage = ({ src, mobile }) => {
  const { isPc } = useMediaQueries();
  const [hover, setHover] = useState(-1);

  return (
    <ImageWrapper
      style={mobile ? { width: "35%" } : isPc ? { width: "70%" } : {}}
      onMouseEnter={() => setHover(1)}
      onMouseLeave={() => setHover(0)}
    >
      <Image
        src={src ? `${PROJECTS_URL}/${src}` : `${PUBLIC_URL}/img/page-pc.png`}
      />

      {isPc ? (
        <DetailDiv
          className={hover === 1 ? "fadeIn" : hover === 0 ? "fadeOut" : "none"}
        >
          <DetailButton className={hover === 1 && "move"}>
            README
            <FontAwesomeIcon
              icon={faInfoCircle}
              style={{ marginLeft: "0.5rem" }}
            />
          </DetailButton>
        </DetailDiv>
      ) : (
        <DetailButton style={{ margin: "0.5rem auto 0" }}>
          README
          <FontAwesomeIcon
            icon={faInfoCircle}
            style={{ marginLeft: "0.5rem" }}
          />
        </DetailButton>
      )}
    </ImageWrapper>
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
  margin-bottom: 1rem;
  // background-color: orange;
`;

const ImageWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  // background-color: aqua;
  border-radius: 0.6rem;
  position: relative;
  overflow: hidden;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  object-fit: contain;
  display: inline-block;
  border: 0.6rem solid black;
  border-radius: inherit;
`;

const fadeIn = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`;

const fadeOut = keyframes`
0% {
  opacity: 1;
}
100% {
  opacity: 0;
}
`;

const DetailDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;

  &.fadeIn {
    animation: ${fadeIn} 1s ease forwards;
  }

  &.fadeOut {
    animation: ${fadeOut} 1s ease;
  }
`;

const move = keyframes`
0% {
  transform: translateY(15%);
}

25% {
  transform: translateY(-30%);
}

50% {
  transform: translateY(5%);
}

75% {
  transform: translateY(-10%);
}

100% {
  transform: translateY(0);
}
`;

const DetailButton = styled.div`
  padding: 0.4rem 0.8rem;
  border-radius: 0.5rem;
  // background-color: black;
  background: linear-gradient(180deg, #f048c1 25.5%, #b200cf 84.5%);
  color: white;
  font-weight: bold;
  width: max-content;

  &.move {
    animation: ${move} 1s ease;
  }
`;

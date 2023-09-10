import React from "react";
import styled from "styled-components";
import MonitorImage from "../../../atomic/contents/MonitorImage";

const ProjectCard = ({ height }) => {
  return <Container style={{ height }}></Container>;
};

export default ProjectCard;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 2rem;
`;

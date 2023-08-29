import React from "react";

import styled from "styled-components";
import colors from "../../../common/colors";

import { PC, Mobile, Tablet, useMediaQueries } from "../../layout/MediaQuery";
import ProjectHead from "../../atomic/contents/ProjectHead";
import MonitorImage from "../../atomic/contents/MonitorImage";
import ProductDescription from "./ProductDescription";
import GrayLine from "../../atomic/contents/GrayLine";
import ProductSkills from "./ProductSkills";
import ProjectTitleBox from "./ProjectTitleBox";

const ProjectBox = () => {
  const { isPc, isTablet, isMobile } = useMediaQueries();

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
          <ProductDescription />

          <GrayLine />

          <ProductSkills />
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

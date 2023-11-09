import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import styled from "styled-components";
import PorjectListNav from "../organism/project/PorjectListNav";
import ProjectDetail from "../organism/project/ProjectDetail";
import { useMediaQueries } from "../layout/MediaQuery";
import Footer from "../organism/footer/Footer";
import { footerHeight } from "../../common/size";
import Data from "../../constants/Data";

const ProjectPage = () => {
  const params = useParams();
  const id = params.id;
  const data = Data[id];

  const { isPc } = useMediaQueries();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <Page>
      <ProjectDetailContainer
        style={isPc ? { width: "75%" } : { width: "100%" }}
      >
        <ProjectDetail data={data} />
      </ProjectDetailContainer>

      <PorjectListNav projectId={id} />

      <Footer />
    </Page>
  );
};

export default ProjectPage;

const Page = styled.div`
  width: 100%;
  display: flex;
  padding-bottom: ${footerHeight};
`;

const ProjectDetailContainer = styled.div`
  width: 100%;
`;

const ProjectNavContainer = styled.div`
  width: 20%;
  position: relative;
`;

import React, { useEffect } from "react";

import styled from "styled-components";

import MainLayout from "../layout/MainLayout";
import InformationSection from "../template/section/InformationSection";
import AboutMeSection from "../template/section/AboutMeSection";
import SkillsSection from "../template/section/SkillsSection";
import ProjectsSection from "../template/section/ProjectsSection";
import ArchiveSection from "../template/section/ArchiveSection";
import ActivitySection from "../template/section/ActivitySection";
import CareerSection from "../template/section/CareerSection";

const MainPage = () => {
  return (
    <MainLayout>
      {/* <InformationSection /> */}

      <AboutMeSection />

      <SkillsSection />

      <ProjectsSection />

      <ArchiveSection />

      <ActivitySection />

      {/* <CareerSection /> */}
    </MainLayout>
  );
};

export default MainPage;

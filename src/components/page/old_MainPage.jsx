import React from "react";

import Information from "../organism/contents/Information";
import AboutMe from "../organism/contents/AboutMe";
import Skills from "../organism/contents/Skills";
import Archive from "../organism/contents/Archive";
import Activity from "../organism/contents/Activity";
import Projects from "../organism/contents/Projects";
import Career from "../organism/contents/Career";
import FullPage from "./FullPage";
import MainLayout from "../layout/MainLayout";

const MainPage = () => {
  return (
    <FullPage>
      <Information />

      <AboutMe />

      <Skills />

      <Projects />

      <Archive />

      <Activity />

      <Career />
    </FullPage>
  );
};

export default MainPage;

import React from "react";

import styled from "styled-components";

import SectionList from "../../../constants/SectionList";
import SectionLayout from "../../layout/SectionLayout";

const AboutMeSection = () => {
  return (
    <SectionLayout section={SectionList.ABOUT_ME}>
      <div style={{ width: "100%", height: 500, backgroundColor: "aqua" }}>
        about me
      </div>
    </SectionLayout>
  );
};

export default AboutMeSection;

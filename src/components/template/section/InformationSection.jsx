import React from "react";

import styled from "styled-components";

import SectionLayout from "../../layout/SectionLayout";
import SectionList from "../../../constants/SectionList";
import { PUBLIC_URL } from "../../../common/config";

const InformationSection = () => {
  return (
    <SectionLayout
      section={SectionList.INFORMATION}
      bgStyle={{
        backgroundImage: `url(${PUBLIC_URL}/img/sky.jpeg)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        backgroundSize: "cover",
      }}
    >
      information
    </SectionLayout>
  );
};

export default InformationSection;

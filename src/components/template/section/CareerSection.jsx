import React from "react";

import styled from "styled-components";
import colors from "../../../common/colors";

import SectionList from "../../../constants/SectionList";
import SectionLayout from "../../layout/SectionLayout";

const CareerSection = () => {
  return (
    <SectionLayout
      section={SectionList.CAREER}
      bgStyle={{ backgroundColor: colors.COLOR_GRAY_BACKGROUND }}
    ></SectionLayout>
  );
};

export default CareerSection;

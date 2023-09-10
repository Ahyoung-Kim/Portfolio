import React from "react";

import styled from "styled-components";
import colors from "../../../common/colors";

import SectionList from "../../../constants/SectionList";
import SectionLayout from "../../layout/SectionLayout";
import CareerItem from "../../molecule/section/career/CareerItem";

const CareerSection = () => {
  return (
    <SectionLayout
      section={SectionList.CAREER}
      bgStyle={{ backgroundColor: colors.COLOR_GRAY_BACKGROUND }}
      justifyContent="flex-start"
    >
      <CareerItem />
    </SectionLayout>
  );
};

export default CareerSection;

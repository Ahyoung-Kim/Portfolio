import React from "react";

import styled from "styled-components";
import colors from "../../../common/colors";

import SectionList from "../../../constants/SectionList";
import SectionLayout from "../../layout/SectionLayout";

const ArchiveSection = () => {
  return (
    <SectionLayout
      section={SectionList.ARCHIVE}
      bgStyle={{ backgroundColor: colors.COLOR_YELLOW_BACKGROUND }}
    ></SectionLayout>
  );
};

export default ArchiveSection;

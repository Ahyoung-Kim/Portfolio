import React from "react";

import styled from "styled-components";
import colors from "../../../common/colors";

import ContentsLayout from "../../layout/ContentsLayout";
import ContentsHead from "../../atomic/contents/ContentsHead";
import NavigationType from "../../../constants/NavigationType";

const Career = () => {
  return (
    <ContentsLayout
      contentId={NavigationType.CAREER}
      bgColor={colors.COLOR_GRAY_BACKGROUND}
    >
      <ContentsHead text={NavigationType.CAREER} />
    </ContentsLayout>
  );
};

export default Career;

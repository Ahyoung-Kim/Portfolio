import React from "react";

import colors from "../../../common/colors";

import ContentsLayout from "../../layout/ContentsLayout";
import ContentsHead from "../../atomic/contents/ContentsHead";
import NavigationType from "../../../constants/NavigationType";
import ArchiveActivityBox from "../../molecule/contents/ArchiveActivityBox";
import ArchiveActivityContainer from "../../molecule/contents/ArchiveActivityContainer";

const Activity = () => {
  return (
    <ContentsLayout
      bgColor={colors.COLOR_YELLOW_BACKGROUND}
      contentId={NavigationType.ACTIVITY}
    >
      <ContentsHead
        text={NavigationType.ACTIVITY}
        alignSelf="flex-end"
        borderDirection="borderRight"
      />

      <ArchiveActivityContainer justifyContent="flex-end">
        <ArchiveActivityBox
          headText={"멋쟁이사자처럼"}
          imageSrc={"img/likelion.png"}
          descriptionText={"대학생 창업 IT 동아리"}
          descriptions={[
            "2022.03 ~ 2022.12 10기 아기사자",
            "2023.03 ~ 2023.12 11기 운영진",
          ]}
        />
      </ArchiveActivityContainer>
    </ContentsLayout>
  );
};

export default Activity;

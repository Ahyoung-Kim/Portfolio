import React from "react";

import colors from "../../../common/colors";

import ContentsLayout from "../../layout/ContentsLayout";
import ContentsHead from "../../atomic/contents/ContentsHead";
import NavigationType from "../../../constants/NavigationType";
import ArchiveActivityBox from "../../molecule/contents/ArchiveActivityBox";
import ArchiveActivityContainer from "../../molecule/contents/ArchiveActivityContainer";

const Archive = () => {
  return (
    <ContentsLayout
      bgColor={colors.COLOR_YELLOW_BACKGROUND}
      contentId={NavigationType.ARCHIVE}
    >
      <ContentsHead text={NavigationType.ARCHIVE} alignSelf="flex-start" />

      <ArchiveActivityContainer>
        <ArchiveActivityBox
          link={"https://github.com/Ahyoung-Kim"}
          headText={"Github"}
          imageSrc={"img/github.png"}
          descriptionText={
            "프로젝트, 알고리즘 문제 풀이 등의 소스 코드를 기록합니다."
          }
        />

        <ArchiveActivityBox
          link={"https://iridescent-zeal.tistory.com/"}
          headText={"Tistory"}
          imageSrc={"img/tistory.png"}
          descriptionText={"개발에 관련된 지식을 공부하며 기록합니다."}
        />
      </ArchiveActivityContainer>
    </ContentsLayout>
  );
};

export default Archive;

import React from "react";

import ContentsLayout from "../../layout/ContentsLayout";
import ContentsHead from "../../atomic/contents/ContentsHead";
import NavigationType from "../../../constants/NavigationType";
import SkillBox from "../../molecule/contents/SkillBox";
import styled from "styled-components";
import colors from "../../../common/colors";

const Skills = () => {
  return (
    <ContentsLayout
      bgColor={colors.COLOR_MINT_BACKGROUND}
      contentId={NavigationType.SKILLS}
    >
      <ContentsHead text={NavigationType.SKILLS} />

      <Wrapper>
        <ColumnWrapper>
          <SkillBox
            label="Frontend"
            srcs={[
              "img/html.png",
              "img/css.png",
              "img/js.png",
              "img/react.png",
              "img/RN.png",
              "img/redux.png",
            ]}
          />

          <SkillBox
            label="Prgramming Languages"
            srcs={[
              "img/js.png",
              "img/c.png",
              "img/cpp.png",
              "img/java.png",
              "img/python.png",
            ]}
          />

          <SkillBox label="Design" srcs={["img/figma.png"]} />
        </ColumnWrapper>

        <ColumnWrapper>
          <SkillBox
            label="Backend"
            srcs={[
              "img/django.png",
              "img/spring.png",
              "img/nodejs.png",
              "img/mongodb.png",
              "img/mysql.png",
              "img/graphql.png",
            ]}
          />

          <SkillBox
            label="Version Control"
            srcs={["img/git.png", "img/github.png"]}
          />
        </ColumnWrapper>
      </Wrapper>
    </ContentsLayout>
  );
};

export default Skills;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  // background-color: orange;
  flex-wrap: wrap;
`;

const ColumnWrapper = styled.div`
  width: 48%;
`;

import React from "react";

import ContentsLayout from "../../layout/ContentsLayout";
import ContentsHead from "../../atomic/contents/ContentsHead";
import NavigationType from "../../../constants/NavigationType";
import SkillBox from "../../molecule/contents/SkillBox";

const Skills = () => {
  return (
    <ContentsLayout bgColor="#B2DFDF">
      <ContentsHead text={NavigationType.SKILLS} />

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
    </ContentsLayout>
  );
};

export default Skills;

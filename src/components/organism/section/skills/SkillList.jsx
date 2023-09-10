import React from "react";

import styled from "styled-components";

import SkillData from "../../../../constants/SkillData";
import SkillItem from "../../../molecule/section/skills/SkillItem";

const SkillList = () => {
  return (
    <Container>
      {SkillData.map((skill) => (
        <SkillItem
          key={skill.id}
          label={skill.label}
          skills={skill.skills}
          clickable={skill.clickable}
        />
      ))}
    </Container>
  );
};

export default SkillList;

const Container = styled.div`
  width: 100%;
  //   background-color: orange;
`;

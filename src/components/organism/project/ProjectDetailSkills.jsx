import React from "react";

import styled from "styled-components";
import colors from "../../../common/colors";

import DetailContainer from "./DetailContainer";

const ProjectDetailSkills = () => {
  return (
    <DetailContainer text="Tech Stacks">
      <SkillItem>
        <Label style={{ backgroundColor: colors.COLOR_FRONTEND }}>
          Frontend
        </Label>
        <Skills>React, Redux</Skills>
      </SkillItem>

      <SkillItem>
        <Label style={{ backgroundColor: colors.COLOR_BACKEND }}>Backend</Label>
        <Skills>Node.js, Express.js, GraphQL</Skills>
      </SkillItem>

      <SkillItem>
        <Label style={{ backgroundColor: colors.COLOR_DATABASE }}>
          Database
        </Label>
        <Skills>MongoDB</Skills>
      </SkillItem>
    </DetailContainer>
  );
};

export default ProjectDetailSkills;

const SkillItem = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

const Label = styled.div`
  border-radius: 20px;
  padding: 0 9px;
  font-size: 0.9rem;
  height: 1.5rem;
  line-height: 1.5rem;
  margin-right: 10px;
`;

const Skills = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
`;

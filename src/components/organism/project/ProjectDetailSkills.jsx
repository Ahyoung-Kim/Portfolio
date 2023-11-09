import React from "react";

import styled from "styled-components";
import colors from "../../../common/colors";

import DetailContainer from "./DetailContainer";

const SkillList = ({ list, listName, listColor, projectId }) => {
  if (!list || list.length == 0) return;

  return (
    <SkillItem>
      <Label style={{ backgroundColor: listColor }}>{listName}</Label>
      {list.map((stack, idx) => (
        <Skills key={`${projectId}_${stack}`}>
          {idx > 0 ? `, ${stack}` : stack}
        </Skills>
      ))}
    </SkillItem>
  );
};

const ProjectDetailSkills = ({ stacks, projectId }) => {
  const { frontend, backend, database } = stacks;

  return (
    <DetailContainer text="Tech Stacks">
      <SkillList
        list={frontend}
        listName={"Frontend"}
        listColor={colors.COLOR_FRONTEND}
        projectId={projectId}
      />
      <SkillList
        list={backend}
        listName={"Backend"}
        listColor={colors.COLOR_BACKEND}
        projectId={projectId}
      />
      <SkillList
        list={database}
        listName={"Database"}
        listColor={colors.COLOR_DATABASE}
        projectId={projectId}
      />
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

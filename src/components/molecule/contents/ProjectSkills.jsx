import React from "react";

import styled from "styled-components";
import colors from "../../../common/colors";

const ProjectSkills = ({ stacks, id }) => {
  const { frontend, backend, database } = stacks;

  return (
    <Container>
      {frontend &&
        frontend.map((stack, idx) => (
          <SkillContainer
            key={`${id}_${stack}`}
            style={{ backgroundColor: colors.COLOR_FRONTEND }}
          >
            {stack}
          </SkillContainer>
        ))}

      {backend &&
        backend.map((stack, idx) => (
          <SkillContainer
            key={`${id}_${stack}`}
            style={{ backgroundColor: colors.COLOR_BACKEND }}
          >
            {stack}
          </SkillContainer>
        ))}

      {database &&
        database.map((stack, idx) => (
          <SkillContainer
            key={`${id}_${stack}`}
            style={{ backgroundColor: colors.COLOR_DATABASE }}
          >
            {stack}
          </SkillContainer>
        ))}
    </Container>
  );
};

export default ProjectSkills;

const Container = styled.div`
  width: 100%;
  //   background-color: aqua;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const SkillContainer = styled.div`
  padding: 4px 8px;
  background-color: orange;
  width: max-content;
  border-radius: 3rem;
  margin: 2px;
  font-size: 0.9rem;
`;

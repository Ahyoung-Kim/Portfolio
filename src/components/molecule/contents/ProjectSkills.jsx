import React from "react";

import styled from "styled-components";
import colors from "../../../common/colors";

const ProjectSkills = ({ skills }) => {
  return (
    <Container>
      <SkillContainer style={{ backgroundColor: colors.COLOR_FRONTEND }}>
        React
      </SkillContainer>
      <SkillContainer style={{ backgroundColor: colors.COLOR_BACKEND }}>
        Node.js
      </SkillContainer>
      <SkillContainer style={{ backgroundColor: colors.COLOR_DATABASE }}>
        MongoDB
      </SkillContainer>
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

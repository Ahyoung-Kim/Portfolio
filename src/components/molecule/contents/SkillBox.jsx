import React from "react";

import styled from "styled-components";
import SkillLogo from "../../atomic/contents/SkillLogo";

const SkillBox = ({ label, srcs }) => {
  return (
    <Box>
      <Label className="bold-text">{label}</Label>
      <Container>
        {srcs && srcs.map((src) => <SkillLogo key={src} src={src} />)}
      </Container>
    </Box>
  );
};

export default SkillBox;

const Box = styled.div`
  margin-bottom: 2.2rem;
  width: 100%;
  height: max-content;
`;

const Container = styled.div`
  width: 100%;
  padding: 15px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 5px 5px 10px rgba(16, 140, 140, 0.5);
`;

const Label = styled.p`
  width: 100%;
  font-weight: bold;
  font-size: 1.4rem;
  line-height: 2rem;
  margin-bottom: 7px;
  color: #108c8c;
`;

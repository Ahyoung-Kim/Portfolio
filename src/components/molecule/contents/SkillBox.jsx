import React from "react";

import styled from "styled-components";
import SkillLogo from "../../atomic/contents/SkillLogo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const SkillBox = ({ label, srcs }) => {
  return (
    <Box>
      <Label>
        <FontAwesomeIcon
          icon={faCode}
          style={{ marginRight: "5px", fontSize: "1.4rem" }}
        />
        {label}
      </Label>
      <Container>
        {srcs && srcs.map((src) => <SkillLogo key={src} src={src} />)}
      </Container>
    </Box>
  );
};

export default SkillBox;

const Box = styled.div`
  margin-bottom: 40px;
`;

const Container = styled.div`
  width: 100%;
  padding: 15px;
  background-color: white;
  border-radius: 8px;
`;

const Label = styled.p`
  width: 100%;
  font-weight: bold;
  font-size: 1.6rem;
  margin-bottom: 7px;
`;

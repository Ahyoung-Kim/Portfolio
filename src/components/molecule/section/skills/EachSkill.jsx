import React from "react";
import styled, { keyframes } from "styled-components";
import SkillImage from "../../../atomic/section/skills/SkillImage";
import colors from "../../../../common/colors";
import TextList from "../../common/TextList";

const EachSkill = ({ src, text, index }) => {
  return (
    <Container>
      <Wrapper style={{ animationDelay: `${index * 15}ms` }}>
        <SkillImage src={src} />

        <TextList text={text} />
      </Wrapper>
    </Container>
  );
};

export default EachSkill;

const fadeIn = keyframes`
from {
    opacity: 0;
    transform: translateX(50%);
}
to {
    opacity: 1;
    transform: translateX(0);
}
`;

const Container = styled.div`
  width: 100%;
  overflow: hidden;
  padding-bottom: 1rem;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  animation: ${fadeIn} 1s ease backwards;
  // background-color: orange;
`;

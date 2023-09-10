import React from "react";
import styled, { keyframes } from "styled-components";
import SkillImage from "../../../atomic/section/skills/SkillImage";
import colors from "../../../../common/colors";

const EachSkill = ({ src, text, index }) => {
  return (
    <Container>
      <Wrapper style={{ animationDelay: `${index * 15}ms` }}>
        <SkillImage src={src} />

        {text && (
          <TextUl>
            {text.map((_text, idx) => (
              <TextLi key={`${_text}_${idx}`}>{_text}</TextLi>
            ))}
          </TextUl>
        )}
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

const TextUl = styled.ul`
  // background-color: aqua;
  display: inline-block;
  list-style-type: disc;
  padding-inline-start: 2rem;
  height: max-content;

  font-size: 1rem;
  line-height: 1.5rem;
`;

const TextLi = styled.li``;

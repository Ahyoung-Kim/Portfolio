import React from "react";

import styled from "styled-components";

const TextList = ({ text }) => {
  if (!text) return;

  return (
    <TextUl>
      {text.map((_text, idx) => (
        <TextLi key={`${_text}_${idx}`}>{_text}</TextLi>
      ))}
    </TextUl>
  );
};

export default TextList;

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

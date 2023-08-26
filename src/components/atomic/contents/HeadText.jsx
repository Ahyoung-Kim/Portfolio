import React from "react";
import styled from "styled-components";

const HeadText = ({ text }) => {
  return <Text>{text}</Text>;
};

export default HeadText;

const Text = styled.p`
  font-weight: bold;
  font-size: 1.4rem;
  margin-bottom: 5px;
`;

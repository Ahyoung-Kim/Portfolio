import React from "react";
import styled from "styled-components";

const ContentsHead = ({ text }) => {
  return <Container className="bold-text">{text}</Container>;
};

export default ContentsHead;

const Container = styled.p`
  font-weight: bold;
  font-size: 1.8rem;
  //   background-color: orange;
  padding: 0 15px;
  border-left: 7px solid black;
  margin-bottom: 30px;
`;

import React from "react";
import styled from "styled-components";

const ContentsHead = ({
  text,
  alignSelf = "center",
  borderDirection = "borderLeft",
}) => {
  return (
    <Container
      className="bold-text"
      style={{ alignSelf, [borderDirection]: "7px solid black" }}
    >
      {text}
    </Container>
  );
};

export default ContentsHead;

const Container = styled.p`
  display: flex;
  font-weight: bold;
  font-size: 1.8rem;
  // background-color: orange;
  padding: 0 15px;
  margin-bottom: 2.2rem;
`;

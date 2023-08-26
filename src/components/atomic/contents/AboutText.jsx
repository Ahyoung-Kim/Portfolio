import React from "react";

import styled from "styled-components";

import { PC, Mobile, Tablet } from "../../layout/MediaQuery";

const AboutText = ({ icon, text, smallText }) => {
  return (
    <>
      <PC>
        <Container style={{ width: "33%" }}>
          <Icon>{icon}</Icon>

          <TextWrapper>
            <Text>{text}</Text>

            {smallText && <SmallText>{smallText}</SmallText>}
          </TextWrapper>
        </Container>
      </PC>

      <Mobile>
        <Container style={{ width: "100%" }}>
          <Icon>{icon}</Icon>

          <TextWrapper>
            <Text>{text}</Text>

            {smallText && <SmallText>{smallText}</SmallText>}
          </TextWrapper>
        </Container>
      </Mobile>

      <Tablet>
        <Container style={{ width: "50%" }}>
          <Icon>{icon}</Icon>

          <TextWrapper>
            <Text>{text}</Text>

            {smallText && <SmallText>{smallText}</SmallText>}
          </TextWrapper>
        </Container>
      </Tablet>
    </>
  );
};

export default AboutText;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  // background-color: orange;
  flex-wrap: wrap;
  flex-shrink: 1;
`;

const Icon = styled.div`
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextWrapper = styled.div`
  margin-left: 10px;
`;

const Text = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 30px;
  color: #5e5e5e;
`;

const SmallText = styled.p`
  // font-weight: bold;
  font-size: 1rem;
  color: #5e5e5e;
`;

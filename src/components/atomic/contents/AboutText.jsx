import React from "react";

import styled from "styled-components";

const AboutText = ({ icon, text, smallText }) => {
  return (
    <Container>
      <Icon>{icon}</Icon>

      <TextWrapper>
        <Text>{text}</Text>

        {smallText && <SmallText>{smallText}</SmallText>}
      </TextWrapper>
    </Container>
  );
};

export default AboutText;

const Container = styled.div`
  display: flex;
  // flex: 1;
  align-items: center;
`;

const Icon = styled.div`
  background-color: orange;
  width: 30px;
  height: 30px;
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
  font-weight: bold;
  font-size: 1rem;
  color: #5e5e5e;
`;

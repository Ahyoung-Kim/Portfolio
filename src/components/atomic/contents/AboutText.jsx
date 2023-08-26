import React from "react";

import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PC, Mobile, Tablet } from "../../layout/MediaQuery";

const AboutText = ({ icon, text, smallText }) => {
  return (
    <>
      <PC>
        <Container style={{ width: "33%" }}>
          <Icon>
            <FontAwesomeIcon icon={icon} />
          </Icon>

          <TextWrapper>
            <Text>{text}</Text>

            {smallText && <SmallText>{smallText}</SmallText>}
          </TextWrapper>
        </Container>
      </PC>

      <Mobile>
        <Container style={{ width: "100%" }}>
          <Icon>
            <FontAwesomeIcon icon={icon} />
          </Icon>

          <TextWrapper>
            <Text>{text}</Text>

            {smallText && <SmallText>{smallText}</SmallText>}
          </TextWrapper>
        </Container>
      </Mobile>

      <Tablet>
        <Container style={{ width: "50%" }}>
          <Icon>
            <FontAwesomeIcon icon={icon} />
          </Icon>

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
`;

const Icon = styled.div`
  width: 2.8rem;
  height: 2.8rem;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  // background-color: orange;
`;

const TextWrapper = styled.div`
  margin-left: 10px;
`;

const Text = styled.p`
  font-weight: bold;
  font-size: 1.1rem;
  line-height: 30px;
  color: #5e5e5e;
`;

const SmallText = styled.p`
  // font-weight: bold;
  font-size: 1rem;
  color: #5e5e5e;
`;

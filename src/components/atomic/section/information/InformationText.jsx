import React from "react";

import styled from "styled-components";
import colors from "../../../../common/colors";

const InformationText = () => {
  return (
    <Container>
      <BigText>
        주니어 <WhiteText>Frontend</WhiteText> 개발자
        <br />
        <WhiteText>김아영</WhiteText> 입니다.
      </BigText>

      <SmallText>
        이러한것들을 좋아해요이러한것들을 좋아해요이러한것들을
        좋아해요이러한것들을 좋아해요이러한것들을 좋아해요이러한것들을
        좋아해요이러한것들을 좋아해요이러한것들을 좋아해요
      </SmallText>
    </Container>
  );
};

export default InformationText;

const Container = styled.div`
  //   background-color: orange;
`;

const BigText = styled.p`
  font-weight: bold;
  font-size: 2rem;
  line-height: 3rem;
  margin-bottom: 10px;
  color: rgba(255, 255, 255, 0.6);
`;

const WhiteText = styled.span`
  color: white;
`;

const SmallText = styled.p`
  color: ${colors.COLOR_GRAY_TEXT};
  font-size: 1rem;
  line-height: 2rem;
`;

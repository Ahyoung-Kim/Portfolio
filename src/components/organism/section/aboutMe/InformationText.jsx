import React from "react";

import styled from "styled-components";
import colors from "../../../../common/colors";

import LeftBarContainer from "../../../atomic/common/LeftBarContainer";
import ProfileLinks from "../../../molecule/section/aboutMe/ProfileLinks";

const InformationText = () => {
  return (
    <Container>
      <BigText>
        주니어 <HighlightText>Frontend</HighlightText> 개발자
        <br />
        <HighlightText>김아영</HighlightText> 입니다.
      </BigText>

      <ProfileLinks />

      <LeftBarContainer>
        <SmallText>
          이러한것들을 좋아해요이러한것들을 좋아해요이러한것들을
          좋아해요이러한것들을 좋아해요이러한것들을 좋아해요이러한것들을
          좋아해요이러한것들을 좋아해요이러한것들을 좋아해요
        </SmallText>
      </LeftBarContainer>
    </Container>
  );
};

export default InformationText;

const Container = styled.div`
  //   background-color: orange;
  color: ${colors.COLOR_GRAY_TEXT};
`;

const BigText = styled.p`
  font-weight: bold;
  font-size: 2rem;
  line-height: 3rem;
  // margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.6);
`;

const HighlightText = styled.span`
  // color: white;
  background: ${colors.COLOR_LINEAR_TEXT};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SmallText = styled.p`
  font-size: 1rem;
  line-height: 2rem;
`;

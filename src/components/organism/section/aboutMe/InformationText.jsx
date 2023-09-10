import React from "react";

import styled from "styled-components";
import colors from "../../../../common/colors";

import LeftBarContainer from "../../../atomic/common/LeftBarContainer";
import ProfileLinks from "../../../molecule/section/aboutMe/ProfileLinks";
import LinearText from "../../../atomic/common/LinearText";

const InformationText = () => {
  return (
    <Container>
      <BigText>
        주니어 <LinearText>Frontend</LinearText>개발자
        <br />
        <LinearText>김아영</LinearText> 입니다.
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

const SmallText = styled.p`
  font-size: 1rem;
  line-height: 2rem;
`;
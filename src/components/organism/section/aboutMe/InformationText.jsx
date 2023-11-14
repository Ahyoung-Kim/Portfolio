import React from "react";

import styled from "styled-components";
import colors from "../../../../common/colors";

import LeftBarContainer from "../../../atomic/common/LeftBarContainer";
import ProfileLinks from "../../../molecule/section/aboutMe/ProfileLinks";
import LinearText from "../../../atomic/common/LinearText";
import Highlight from "../../../atomic/contents/Highlight";

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
          안녕하세요. <Highlight>주니어 Frontend 개발자</Highlight> 김아영
          입니다. Frontend 개발 뿐만 아니라 <Highlight>풀스택</Highlight>{" "}
          개발에도 도전하고 있습니다. 저는{" "}
          <Highlight>꼼꼼하고 끈기있는</Highlight> 성격을 장점으로 갖고 있으며,{" "}
          <Highlight>경험하며 발전</Highlight>하는 것에 희열을 느끼는
          개발자입니다. 더 나은 개발자로 성장하기 위해 노력하고 있습니다.
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

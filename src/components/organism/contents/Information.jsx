import React from "react";

import styled from "styled-components";

import ContentsLayout from "../../layout/ContentsLayout";
import { Mobile, PC, Tablet } from "../../layout/MediaQuery";
import Highlight from "../../atomic/contents/Highlight";

const Information = () => {
  return (
    <ContentsLayout
      bgStyle={{
        backgroundImage: `url(img/sky.jpeg)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        backgroundSize: "cover",
      }}
    >
      <PC>
        <Contents>
          <ProfileImage src="img/profile-img.jpg" />

          <TextWrapper>
            <Name>김아영</Name>
            <Developer>웹 개발자 포트폴리오</Developer>
            <Description>
              안녕하세요.
              <br />
              <Highlight>도전과 경험</Highlight> 을 쫓는{" "}
              <Highlight>주니어 Frontend 개발자</Highlight> 김아영입니다.
              <br />
              Frontend와 더불어 <Highlight>Backend</Highlight> 에 대한 경험을
              쌓고 있으며,
              <br /> 여러 문제에 직면하여 스스로에게{" "}
              <Highlight>기회와 용기</Highlight> 를 만들어주고자 합니다.
            </Description>
          </TextWrapper>
        </Contents>
      </PC>

      <Tablet>
        <Contents>
          <ProfileImage src="img/profile-img.jpg" />

          <TextWrapper>
            <Name>김아영</Name>
            <Developer>웹 개발자 포트폴리오</Developer>
            <Description>
              안녕하세요. <Highlight>도전과 경험</Highlight> 을 쫓는{" "}
              <Highlight>주니어 Frontend 개발자</Highlight> 김아영입니다.
              <br />
              Frontend와 더불어 <Highlight>Backend</Highlight> 에 대한 경험을
              쌓고 있으며,
              <br /> 여러 문제에 직면하여 스스로에게{" "}
              <Highlight>기회와 용기</Highlight> 를 만들어주고자 합니다.
            </Description>
          </TextWrapper>
        </Contents>
      </Tablet>

      <Mobile>
        <ProfileImageSmall src="img/profile-img.jpg" />

        <MobileTextWrapper>
          <Name>김아영</Name>
          <Developer>웹 개발자 포트폴리오</Developer>
          <Description>
            안녕하세요. <Highlight>도전과 경험</Highlight> 을 쫓는
            <Highlight>주니어 Frontend 개발자</Highlight> 김아영입니다.
            <br />
            Frontend와 더불어 <Highlight>Backend</Highlight> 에 대한 경험을 쌓고
            있으며,
            <br /> 여러 문제에 직면하여 스스로에게{" "}
            <Highlight>기회와 용기</Highlight> 를 만들어주고자 합니다.
          </Description>
        </MobileTextWrapper>
      </Mobile>
    </ContentsLayout>
  );
};

export default Information;

const Contents = styled.div`
  // background-color: aqua;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfileImage = styled.img`
  width: 200px;
  object-fit: cover;
  border-radius: 100%;
`;

const ProfileImageSmall = styled.img`
  width: 150px;
  object-fit: cover;
  border-radius: 100%;
`;

const TextWrapper = styled.div`
  //   background-color: aqua;
  margin-left: 30px;
`;

const MobileTextWrapper = styled.div`
  // background-color: aqua;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Name = styled.p`
  font-weight: bold;
  font-size: 1.8rem;
  color: white;
`;

const Developer = styled.p`
  font-weight: bold;
  font-size: 1.4rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 15px 0;
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 2rem;
  color: #474747;
  font-weight: bold;
`;

import React from "react";

import styled from "styled-components";
import colors from "../../../../common/colors";

import {
  faCalendarDays,
  faUserTie,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

import GrayLine from "../../../atomic/contents/GrayLine";
import CareerIconText from "../../../atomic/section/career/CareerIconText";

const CareerItem = () => {
  return (
    <Container>
      <CompanyName className="bold-text">(주) 케이퍼스트랩</CompanyName>

      <GrayLine />

      <CareerIconText text={"2022.12 ~ 2023.02"} icon={faCalendarDays} />
      <CareerIconText text={"인턴"} icon={faUserTie} />
      <CareerIconText text={"모바일 앱 풀스택 개발 업무"} icon={faGear} />

      <Description>
        AI 추천 서비스용 어플리케이션을 개발하는 기업으로 웹 어플리케이션 개발과
        모바일 앱 어플리케이션 개발이 이루어지고 있습니다. 주 2회이상 서비스에
        대한 기획 회의 및 코드 리뷰를 통한 협업을 경험하였으며 더 효율적인
        코드를 위한 연구를 할 수 있었습니다. 자바스크립트 언어와 React.js, React
        Native, Node.js로 앱/서버 풀스택 개발에 대한 이해 및 실무 숙련
        트레이닝을 경험할 수 있었습니다.
      </Description>
    </Container>
  );
};

export default CareerItem;

const Container = styled.div`
  width: 100%;
  //   background-color: white;
`;

const CompanyName = styled.p`
  font-size: 1.7rem;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.7rem;
  margin: 1.5rem 0;
`;

const Bold = styled.span`
  font-weight: bold;
`;

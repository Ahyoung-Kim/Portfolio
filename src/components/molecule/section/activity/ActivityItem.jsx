import React from "react";

import styled from "styled-components";

import WhiteBox from "../../../atomic/common/WhiteBox";
import { useMediaQueries } from "../../../layout/MediaQuery";
import { PUBLIC_URL } from "../../../../common/config";
import TextList from "../../common/TextList";

const ActivityItem = () => {
  const { isMobile } = useMediaQueries();
  return (
    <Container style={{ width: isMobile ? "100%" : "60%" }}>
      <WhiteBox padding={"3rem"}>
        <LogoDiv>
          <Logo src={`${PUBLIC_URL}/img/likelion-icon.png`} />
        </LogoDiv>

        <Label className="bold-text">멋쟁이사자처럼 서강대</Label>

        <Description>
          대학생 IT 창업 동아리 ‘멋쟁이사자처럼’의 일원으로 활동하였습니다.{" "}
        </Description>

        <TextList
          text={[
            "2022.03 ~ 2022.12 10기 아기사자",
            "2023.03 ~ 2023.12 11기 운영진",
          ]}
        />
      </WhiteBox>
    </Container>
  );
};

export default ActivityItem;

const Container = styled.div``;

const LogoDiv = styled.div`
  width: 100%;
  text-align: center;
`;

const Logo = styled.img`
  width: 50%;
`;

const Label = styled.p`
  font-size: 1.3rem;
  margin: 2rem 0 1rem;
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

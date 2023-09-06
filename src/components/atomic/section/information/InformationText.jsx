import React from "react";

import styled from "styled-components";
import { useMediaQueries } from "../../../layout/MediaQuery";
import colors from "../../../../common/colors";

const InformationText = () => {
  const { isPc } = useMediaQueries();

  return (
    <Container
      style={
        isPc
          ? {
              marginLeft: "5%",
            }
          : { width: "100%", marginTop: "5%" }
      }
    >
      <BigText>
        주니어 Frontend 개발자
        <br />
        김아영 입니다.
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
`;

const SmallText = styled.p`
  color: ${colors.COLOR_GRAY_TEXT};
  font-size: 1rem;
  line-height: 2rem;
`;

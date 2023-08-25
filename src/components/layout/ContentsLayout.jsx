import React from "react";

import styled from "styled-components";
import { PC, Tablet, Mobile } from "./MediaQuery";

const ContentsLayout = ({ children, bgStyle = {}, bgColor = "white" }) => {
  return (
    <Container style={{ ...bgStyle, backgroundColor: bgColor }}>
      <PC>
        <Contents style={{ width: "75%" }}>{children}</Contents>
      </PC>

      <Tablet>
        <Contents>{children}</Contents>
      </Tablet>

      <Mobile>
        <Contents>{children}</Contents>
      </Mobile>
    </Container>
  );
};

export default ContentsLayout;

const Container = styled.div`
  width: 100%;
  padding: 50px 15px;
`;

const Contents = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  // background-color: orange;
  width: 100%;
`;

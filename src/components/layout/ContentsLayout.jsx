import React from "react";

import styled from "styled-components";

const ContentsLayout = ({ children, bgStyle = {}, bgColor = "white" }) => {
  return (
    <Container style={{ ...bgStyle, backgroundColor: bgColor }}>
      <Contents>{children}</Contents>
    </Container>
  );
};

export default ContentsLayout;

const Container = styled.div`
  width: 100%;
  padding: 40px 15px;
`;

const Contents = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  //   background-color: orange;
`;

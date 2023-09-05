import React, { useEffect } from "react";

import styled from "styled-components";
import { PC, Tablet, Mobile } from "./MediaQuery";
import useScrollAnimation from "../hooks/useScrollAnimation";

const ContentsLayout = ({
  children,
  bgStyle = {},
  bgColor = "white",
  contentId,
}) => {
  const { inView, ref } = useScrollAnimation();

  return (
    <>
      <Container
        ref={ref}
        id={contentId}
        style={{ ...bgStyle, backgroundColor: bgColor }}
      >
        <PC>
          <Contents style={{ width: "80%" }}>{children}</Contents>
        </PC>

        <Tablet>
          <Contents>{children}</Contents>
        </Tablet>

        <Mobile>
          <Contents>{children}</Contents>
        </Mobile>
      </Container>
    </>
  );
};

export default ContentsLayout;

const Container = styled.div`
  width: 100%;
  padding: 50px 15px;
  min-height: 100vh;
`;

const Contents = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  // background-color: orange;
  width: 100%;
`;

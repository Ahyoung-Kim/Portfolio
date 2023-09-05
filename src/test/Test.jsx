import React, { useCallback, useEffect, useRef, useState } from "react";

import styled, { keyframes, css } from "styled-components";

import useWheel from "../components/hooks/useWheel";

const Wrapper = ({ visible, children }) => {
  return (
    <ContentWrapper>
      {visible ? <Animation>{children}</Animation> : children}
    </ContentWrapper>
  );
};

const Section = ({ curSection, index }) => {
  return (
    <SectionDiv>
      {/* <Wrapper visible={curSection === index}>
        <Content>
          {index}
          <Card />
        </Content>
      </Wrapper> */}
      <ContentWrapper>
        <Content>
          {index}
          <Card className="card" />
        </Content>
      </ContentWrapper>
    </SectionDiv>
  );
};

const arr = [0, 1, 2];

const Test = () => {
  const [curSection, setCurSection] = useState(0);

  const wheelHandler = useCallback((ref, deltaY, scrollTop) => {
    // 뷰포트 높이 값
    const pageHeight = window.innerHeight;

    let dest = Math.ceil(scrollTop / pageHeight);

    if (deltaY > 0) {
      // scroll down
      dest++;
    } else {
      // scroll up
      dest--;
    }

    if (dest < 0 || dest > arr.length - 1) {
      return;
    }

    setCurSection(dest);
    ref.current?.scrollTo({
      top: pageHeight * dest,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const containerRef = useWheel(wheelHandler);

  return (
    <Container ref={containerRef}>
      {arr.map((_, idx) => (
        <Section key={idx} index={idx} curSection={curSection} />
      ))}
    </Container>
  );
};

export default Test;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: whitesmoke;
`;

const SectionDiv = styled.div`
  width: 100%;
  height: 100vh;
`;

const move = keyframes`
from {
    opacity: 0;
}
to {
    opacity: 1;
}
`;

const move2 = keyframes`
from {
    opacity: 1;
}
to {
    opacity: 0;
}
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: orange;
  box-sizing: border-box;
  padding: 20px;
`;

const Animation = styled.div`
  width: 100%;
  height: 100%;
  animation: ${move} 1s ease;
`;
const Animation2 = styled.div`
  width: 100%;
  height: 100%;
  animation: ${move2} 2s ease;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
`;

const temp = keyframes`
0% {
    transform: translateY(50%);
    opacity: 0;
}

100% {
    transform: translateY(0);
    opacity: 1;
}
`;

const Card = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  background-color: royalblue;

  //   animation: ${temp} 2s ease;
`;

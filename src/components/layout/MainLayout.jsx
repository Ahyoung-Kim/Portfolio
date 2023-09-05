import React, { useCallback, useRef, useState } from "react";

import useWheel from "../hooks/useWheel";
import styled from "styled-components";
import MainMenu from "../organism/menu/MainMenu";
import StatusBar from "../atomic/section/StatusBar";

const MainLayout = ({ children }) => {
  const currentSection = useRef(0);
  const [curr, setCurr] = useState(0);

  const handleMouseWheel = useCallback((ref, deltaY, scrollTop) => {
    const pageHeight = window.innerHeight;

    let dest = currentSection.current;
    const length = ref.current?.children?.length;

    if (deltaY > 0) {
      // scroll down
      dest++;
    } else {
      // scroll up
      dest--;
    }

    if (dest < 0 || dest > length - 1) {
      return;
    }

    setCurr(dest);
    currentSection.current = dest;
    ref.current?.scrollTo({
      top: pageHeight * dest,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const moveToSection = (index) => {
    if (!ref.current) return;

    const pageHeight = window.innerHeight;

    setCurr(index);
    currentSection.current = index;
    ref.current?.scrollTo({
      top: pageHeight * index,
      left: 0,
      behavior: "smooth",
    });
  };

  const ref = useWheel(handleMouseWheel);

  return (
    <Layout ref={ref}>
      <MainMenu moveToSection={moveToSection} />

      <StatusBar currentSection={curr} />
      {children}
    </Layout>
  );
};

export default MainLayout;

const Layout = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
  position: relative;
  background-color: white;
`;

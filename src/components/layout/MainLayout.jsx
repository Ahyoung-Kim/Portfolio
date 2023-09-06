import React, { useCallback, useRef, useState } from "react";

import useWheel from "../hooks/useWheel";
import styled from "styled-components";
import MainMenu from "../organism/menu/MainMenu";
import StatusBar from "../atomic/section/StatusBar";
import { SECTION_LIMIT } from "../../constants/SectionList";

const MainLayout = ({ children }) => {
  const currentSection = useRef(0);
  const scrollable = useRef(true);

  const [curr, setCurr] = useState(0);

  const [height, setHeight] = useState(null);

  const scrollTo = (top, dest) => {
    setCurr(dest);
    currentSection.current = dest;
    ref.current?.scrollTo({
      top,
      left: 0,
      behavior: "smooth",
    });
  };

  const scrollDown = () => {
    if (!ref.current) return;

    const pageHeight = window.innerHeight;
    const dest = currentSection.current + 1;

    if (dest > SECTION_LIMIT - 1) return;

    const itemIndex = currentSection.current;
    const currentItem = ref.current?.children.item(itemIndex);
    const top = ref.current?.scrollTop + currentItem.clientHeight;

    // if (currentItem.clientHeight > pageHeight) {
    //   setHeight(`${currentItem.clientHeight}px`);
    //   scrollable.current = false;

    //   if (
    //     window.scrollY > 0 &&
    //     currentItem.scrollHeight - window.scrollY >= pageHeight
    //   ) {
    //     scrollable.current = true;
    //   }
    // }

    scrollTo(top, dest);
  };

  const scrollUp = () => {
    if (!ref.current) return;

    const pageHeight = window.innerHeight;
    const dest = currentSection.current - 1;

    if (dest < 0) return;

    const itemIndex = currentSection.current - 1;
    const prevItem = ref.current?.children.item(itemIndex);
    const currentItem = ref.current?.children.item(currentSection.current);
    const top = ref.current?.scrollTop - prevItem.clientHeight;

    if (currentItem.clientHeight > pageHeight) {
    }

    scrollTo(top, dest);
  };

  const handleMouseWheel = useCallback((ref, deltaY, scrollTop) => {
    if (!ref.current) return;

    if (deltaY > 0) {
      // scroll down
      scrollDown();
    } else {
      // scroll up
      scrollUp();
    }
  }, []);

  const moveToSection = (index) => {
    if (!ref.current) return;
    console.log(index);

    // const deltaY = index - currentSection.current;
    // const dir = deltaY > 0 ? 1 : -1;
    // const clientHeight = ref.current?.children.item(index).clientHeight;
    // const top = ref.current?.scrollTop + dir * clientHeight;

    // scrollTo(top, index);

    setCurr(index);
    currentSection.current = index;
    ref.current?.scrollTo({
      top: window.innerHeight * index,
      left: 0,
      behavior: "smooth",
    });
  };

  const ref = useWheel(handleMouseWheel);

  return (
    <Layout ref={ref} style={{ height: height ? height : "100vh" }}>
      {children}

      <StatusBar currentSection={curr} />

      <MainMenu moveToSection={moveToSection} />
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

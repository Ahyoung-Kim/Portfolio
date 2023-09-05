import React, { useState, useCallback } from "react";

import useWheel from "../hooks/useWheel";
import styled from "styled-components";

const MainLayout = ({ children }) => {
  const [curSection, setCurSection] = useState(0);

  const handleMouseWheel = useCallback((ref, deltaY, scrollTop) => {
    const pageHeight = window.innerHeight;

    let dest = Math.ceil(scrollTop / pageHeight);
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

    setCurSection(dest);
    ref.current?.scrollTo({
      top: pageHeight * dest,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const ref = useWheel(handleMouseWheel);

  return <Layout ref={ref}>{children}</Layout>;
};

export default MainLayout;

const Layout = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

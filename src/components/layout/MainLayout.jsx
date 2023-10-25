import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  createContext,
} from "react";

import useWheel from "../hooks/useWheel";
import styled from "styled-components";
import MainMenu from "../organism/menu/MainMenu";
import StatusBar from "../atomic/section/StatusBar";
import { SECTION_LIMIT } from "../../constants/SectionList";

export const CurrentContext = createContext();

const MainLayout = ({ children }) => {
  const ref = useRef(null);
  const currentIndex = useRef(0);
  const timeoutRef = useRef(false);
  const oldTouchY = useRef(0);

  const [currentSection, setCurrentSection] = useState(0);
  const [openMenu, setOpenMenu] = useState(false);

  const scrollDown = () => {
    const dest = currentIndex.current + 1;

    if (dest > SECTION_LIMIT - 1) return;

    const currEl = ref.current?.children?.item(currentIndex.current);
    const nextEl = ref.current?.children?.item(dest);

    // currEl.children.item(0).classList.remove("active");
    // nextEl.children.item(0).classList.add("active");

    currEl.style.top = "-100%";
    currentIndex.current = dest;
    setCurrentSection(dest);
  };

  const scrollUp = () => {
    const dest = currentIndex.current - 1;

    if (dest < 0) return;

    const currEl = ref.current?.children?.item(currentIndex.current);
    const prevEl = ref.current?.children?.item(dest);

    // currEl.children.item(0).classList.remove("active");
    // prevEl.children.item(0).classList.add("active");

    prevEl.style.top = 0;
    currentIndex.current = dest;
    setCurrentSection(dest);
  };

  const onScroll = (deltaY) => {
    if (!timeoutRef.current && !openMenu) {
      const currentItem = ref.current?.children?.item(currentIndex.current);
      const contents = currentItem.children.item(0);

      const diff = contents.clientHeight - window.innerHeight;
      const scrollTop = Math.ceil(currentItem.scrollTop);
      // const scrollTop = currentItem.scrollTop;

      if (diff > 0) {
        if (diff <= scrollTop && deltaY > 0) {
          scrollDown();
        } else if (scrollTop === 0 && deltaY < 0) {
          scrollUp();
        }
      } else {
        if (deltaY > 0) {
          scrollDown();
        } else {
          scrollUp();
        }
      }

      timeoutRef.current = window.setTimeout(() => {
        timeoutRef.current = null;
      }, 2000);
    }
  };

  const handleMouseWheel = (e) => {
    const { deltaY } = e;
    onScroll(deltaY);
  };

  const onTouchStart = (e) => {
    oldTouchY.current = e.changedTouches.item(0)?.clientY || 0;
  };

  const onTouchEnd = (e) => {
    const currentY = e.changedTouches.item(0)?.clientY || 0;
    const deltaY = oldTouchY.current - currentY;
    const pageHeight = window.innerHeight;
    // console.log(deltaY, pageHeight / 10);

    if (Math.abs(deltaY) > pageHeight / 10) {
      onScroll(deltaY);
    }
  };

  const moveToSection = (index) => {
    const cnt = Math.abs(index - currentIndex.current);

    if (cnt == 0) return;

    const scroll = index > currentIndex.current ? scrollDown : scrollUp;

    for (let i = 0; i < cnt; i++) {
      scroll();
    }
  };

  useEffect(() => {
    if (!ref.current) return;

    const container = ref.current;

    container.addEventListener("wheel", handleMouseWheel);
    container.addEventListener("touchstart", onTouchStart);
    container.addEventListener("touchend", onTouchEnd);

    return () => {
      container.removeEventListener("wheel", handleMouseWheel);
      container.removeEventListener("touchstart", onTouchStart);
      container.removeEventListener("touchend", onTouchEnd);

      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, [openMenu]);

  return (
    <CurrentContext.Provider value={[currentSection, setCurrentSection]}>
      <Layout ref={ref}>
        {children}

        <StatusBar currentSection={currentSection} />

        <MainMenu
          moveToSection={moveToSection}
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
        />
      </Layout>
    </CurrentContext.Provider>
  );
};

export default MainLayout;

const Layout = styled.div`
  width: 100%;
  // height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  position: relative;
  background-color: white;
`;

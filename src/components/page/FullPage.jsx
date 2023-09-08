import React, { useEffect, useRef, useState } from "react";

import styled from "styled-components";

const FullPage = ({ children }) => {
  const outerRef = useRef(null);
  const canScroll = useRef(true);
  const oldTouchY = useRef(0);
  const currentPage = useRef(0);

  const onScroll = (isScrollDown) => {
    const currentChild = isScrollDown
      ? outerRef.current?.children.item(currentPage.current)
      : outerRef.current?.children.item(
          currentPage.current - 1 >= 0 ? currentPage.current - 1 : 0
        );
    const pageHeight = currentChild?.clientHeight;

    if (pageHeight && outerRef.current) {
      const dir = isScrollDown ? 1 : -1;
      const top = outerRef.current?.scrollTop + pageHeight * dir;

      outerRef.current.scrollTo({
        top,
        left: 0,
        behavior: "smooth",
      });

      const count = outerRef.current.childElementCount - 1;
      if (
        (isScrollDown && count > currentPage.current) ||
        (!isScrollDown && currentPage.current > 0)
      ) {
        currentPage.current += dir;
      }

      canScroll.current = false;
      setTimeout(() => {
        canScroll.current = true;
      }, 1500);
    }
  };

  const wheelHandler = (e) => {
    e.preventDefault();

    if (!canScroll.current || !outerRef.current) return;

    // +: down, -: up
    const { deltaY } = e;
    const isScrollDown = deltaY > 0 ? true : false;
    onScroll(isScrollDown);
  };

  // 스크롤 기능 비활성화 함수
  const scrollHandler = (e) => {
    e.preventDefault();
  };

  // 터치로 스크롤
  const onTouchStart = (e) => {
    e.preventDefault();
    oldTouchY.current = e.changedTouches.item(0)?.clientY || 0;
  };
  const onTouchEnd = (e) => {
    e.preventDefault();

    const currentTouchY = e.changedTouches.item(0)?.clientY || 0;
    const isScrollDown = oldTouchY.current - currentTouchY > 0 ? true : false;

    onScroll(isScrollDown);
  };

  useEffect(() => {
    const outer = outerRef.current;

    if (!outer) return;

    outer.addEventListener("wheel", wheelHandler);
    // PC, 모바일에서 스크롤 이벤트 비활성화 시키기
    outer.addEventListener("scroll", scrollHandler);
    outer.addEventListener("touchmove", scrollHandler);
    // move: 터치 포인터를 움직이는 시점
    // start: 터치 시작 시점 , end: 터치 종료 시점
    outer.addEventListener("touchstart", onTouchStart);
    outer.addEventListener("touchend", onTouchEnd);

    return () => {
      outer.removeEventListener("wheel", wheelHandler);
      outer.removeEventListener("scroll", scrollHandler);
      outer.removeEventListener("touchmove", scrollHandler);
      outer.removeEventListener("touchstart", onTouchStart);
      outer.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  return (
    <>
      <Container ref={outerRef}>{children}</Container>
    </>
  );
};

export default FullPage;

const Container = styled.div`
  width: 100%;
  // height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  overflow-y: hidden;
`;

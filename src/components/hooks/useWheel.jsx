import React, { useEffect, useRef } from "react";

/**
 * 마우스 휠을 감지하여 콜백함수를 처리할 수 있는 ref 객체를 반환하는 커스텀 훅.
 * 디바운스 기법을 적용하여 트랙패드에서 많은 이벤트 발생해도 한 번만 처리함.
 * @param callback 마우스 휠 이후 처리될 콜백함수 (deltaY, scrollTop)을 인자로 받는다.
 */
// callback parameters: ref, deltaY, scrollTop
const useWheel = (callback) => {
  const ref = useRef(null);
  const timeoutRef = useRef(null); // for debounce
  const oldTouchY = useRef(0);

  const onScroll = (deltaY) => {
    if (!timeoutRef.current) {
      callback(ref, deltaY, ref.current?.scrollTop);
      timeoutRef.current = window.setTimeout(() => {
        timeoutRef.current = null;
      }, 1500);
    }
  };

  const handleMouseWheel = (e) => {
    // e.preventDefault();
    onScroll(e.deltaY);
  };

  const onTouchStart = (e) => {
    oldTouchY.current = e.changedTouches.item(0)?.clientY || 0;
  };

  const onTouchEnd = (e) => {
    const currentTouchY = e.changedTouches.item(0)?.clientY || 0;
    const deltaY = oldTouchY.current - currentTouchY;

    onScroll(deltaY);
  };

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    currentRef.addEventListener("wheel", handleMouseWheel);
    currentRef.addEventListener("touchstart", onTouchStart);
    currentRef.addEventListener("touchend", onTouchEnd);

    return () => {
      // 메모리 누수 방지를 위한 이벤트 제거
      currentRef.removeEventListener("wheel", handleMouseWheel);
      currentRef.removeEventListener("touchstart", onTouchStart);
      currentRef.removeEventListener("touchend", onTouchEnd);

      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, [ref, callback]);

  return ref;
};

export default useWheel;

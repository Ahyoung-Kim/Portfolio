import React, { useEffect } from "react";
import gsap from "gsap";
import { Power1 } from "gsap";

import styled from "styled-components";
import colors from "../../../common/colors";

import SectionList from "../../../constants/SectionList";
import SectionLayout from "../../layout/SectionLayout";
import { PUBLIC_URL } from "../../../common/config";
import ArchiveItem from "../../molecule/section/archive/ArchiveItem";
import ArchiveData from "../../../constants/ArchiveData";

const ArchiveSection = () => {
  //아이콘 둥둥

  // 범위 랜덤 함수(소수점 2자리까지)
  function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2));
  }

  function floatingObject(selector, delay, size) {
    //애니메이션 처리: gsap.to(요소, 지속시간(s), 옵션);
    gsap.to(selector, {
      y: size, //y축으로 얼마만큼 움직이면서 애니메이션
      repeat: -1, //무한 반복
      duration: random(1.5, 2.5),
      yoyo: true, //한번 재생된 애니메이션을 다시 뒤로 재생해서 위아래로 재생되게
      delay: random(0, delay), //몇 초 뒤에 애니메이션을 실행하겠다.
      ease: Power1.easeInOut,
    });
  }

  useEffect(() => {
    floatingObject(".floating1", 1, 30);
    floatingObject(".floating2", 0.5, 30);
    floatingObject(".floating3", 1.5, 100);
  }, []);

  return (
    <SectionLayout
      section={SectionList.ARCHIVE}
      bgStyle={{
        backgroundImage: `url(${PUBLIC_URL}/img/texture-background.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        backgroundSize: "cover",
      }}
    >
      <Floating className="floating floating1" />
      <Floating className="floating floating2" />
      <Floating className="floating floating3" />

      <Wrapper>
        {ArchiveData.map((data, index) => (
          <ArchiveItem key={data.id} data={data} index={index} />
        ))}
      </Wrapper>
    </SectionLayout>
  );
};

export default ArchiveSection;

const Wrapper = styled.div`
  width: 100%;
  // background-color: white;
`;

const Floating = styled.div`
  border-radius: 50%;
  background-color: ${colors.COLOR_PINK};
  position: absolute;
  z-index: -1;

  &.floating1 {
    width: 10rem;
    height: 10rem;
    bottom: 0;
    right: 0;
    opacity: 0.8;

    transform: translateX(-25%) translateY(-50%);
  }
  &.floating2 {
    width: 5rem;
    height: 5rem;
    bottom: 0;
    right: 0;
    opacity: 1;
    transform: translateY(-100%);
  }
  &.floating3 {
    width: 15rem;
    height: 15rem;
    bottom: 0;
    left: 0;
    opacity: 0.5;
  }
`;

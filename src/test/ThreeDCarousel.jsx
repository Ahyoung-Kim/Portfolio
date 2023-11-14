import React from "react";

import styled, { keyframes } from "styled-components";

const color_list = [
  "#ff7979",
  "#ffbe76",
  "#f0932b",
  "#7ed6df",
  "#e056fd",
  "#22a6b3",
  "#be2edd",
  "#4834d4",
  "#30336b",
];

const ThreeDCarousel = () => {
  return (
    <Scene>
      <Carousel>
        {color_list.map((color, idx) => {
          // 정구각형 형태로 나타내기 위해서는 Y축에 40(360 / 9) 만큼 각도 부여하기
          // 0, 40, 80, 120, 160, 200, 240, 280, 320 도 위치에 꼭짓점이 생성됨
          const deg = idx * 40;

          // 현재 아이템 상자 -> 다음 아이템 상자 사이 각도 = 40도
          // 상자를 정구각형의 변의 위치로 보내야함
          // 변의 위치를 알기 위해선 꼭짓점에서 해당 변까지의 거리(x)가 필요
          // 한 변의 길이 = 아이템의 너비 = 150px
          // 한 변의 길이 / 2 = 75px
          // (75) / x = tan(20deg) -> x = 75 / tan(20deg)
          // tan(20deg) = 0.363970
          // x = 206.xxxx

          return (
            <Item
              key={`${color}${idx}`}
              style={{
                backgroundColor: color,
                transform: `rotateY(${deg}deg) translateZ(206px)`,
              }}
            >
              {idx + 1}
            </Item>
          );
        })}
      </Carousel>
    </Scene>
  );
};

export default ThreeDCarousel;

const Scene = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  // 화면에 원금감 주기: 멀고 가까운 거리에 대한 느낌
  // perspective: 3D 요소에 원근 효과 주기, 숫자 작을수록 원근 효과 큼
  perspective: 1000px;

  // transform-style: 3D 공간에서 자식 요소들을 렌더링하는 방법 결정
  // 기본값은 납작한 'flat'
  // preserve-3d: 해당 컨테이너 영역을 삼차원 영역으로 활용
  transform-style: preserve-3d;
`;

const spin = keyframes`
from {
  transform: rotateY(0deg);
}
to {
  transform: rotateY(360deg);
}
`;

const Carousel = styled.div`
  width: 150px;
  height: 150px;
  position: relative;
  transform-style: preserve-3d;
  // transform: rotateX(-45deg) rotateY(85deg);
  animation: ${spin} 10s infinite linear;
`;

const Item = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  color: #fff;
  font-size: 32px;
  font-weight: 600;

  position: absolute;
  top: 0;
  left: 0;
`;

import React, { useState } from "react";

import styled from "styled-components";
import colors from "../../../../common/colors";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import ProjectCard from "../../../molecule/section/projects/ProjectCard";
import { useMediaQueries } from "../../../layout/MediaQuery";

const CARD_SIZE = "50%";
const CARDS = 10;
const MAX_VISIBILITY = 3;

const ProjectCarousel = () => {
  const { isMobile, isPc } = useMediaQueries();
  const [current, setCurrent] = useState(0);

  const onClickLeft = () => {
    setCurrent(current - 1);
  };

  const onClickRight = () => {
    setCurrent(current + 1);
  };

  return (
    <Container>
      <Carousel style={{ width: isMobile ? "100%" : "70%" }}>
        {current > 0 && (
          <Button className="left" onClick={onClickLeft}>
            <FontAwesomeIcon icon={faChevronCircleLeft} />
          </Button>
        )}

        {[...new Array(CARDS)].map((_, idx) => {
          const diff = current - idx;
          const active = idx === current;

          return (
            <CardContainer
              key={idx}
              style={{
                position: active ? "relative" : "absolute",
                "--active": active ? 1 : 0,
                "--offset": diff / 3,
                "--direction": Math.sign(diff),
                "--abs-offset": Math.abs(diff) / 3,
                pointerEvents: active ? "auto" : "none",
                opacity: Math.abs(diff) >= MAX_VISIBILITY ? "0" : "1",
                display: Math.abs(diff) >= MAX_VISIBILITY ? "none" : "block",
              }}
            >
              {active && (
                <ProjectName className="bold-text">hello world</ProjectName>
              )}

              <CardWrapper>
                <ProjectCard
                  absOffset={Math.abs(diff) / 3}
                  height={`calc(var(--vh, 1vh) * ${(idx + 1) * 10})`}
                />
              </CardWrapper>
            </CardContainer>
          );
        })}

        {current < CARDS - 1 && (
          <Button className="right" onClick={onClickRight}>
            <FontAwesomeIcon icon={faChevronCircleRight} />
          </Button>
        )}
      </Carousel>
    </Container>
  );
};

export default ProjectCarousel;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  //   background-color: orange;
  padding-top: 4rem;
`;

const Carousel = styled.div`
  position: relative;
  width: ${CARD_SIZE};
  //   height: calc(var(--vh, 1vh) * 50);
  perspective: 500px;
  transform-style: preserve-3d;
`;

const Button = styled.div`
  color: white;
  font-size: 1.5rem;
  height: 4rem;

  position: absolute;
  top: 0;
  z-index: 2;
  transform: translateY(-100%);

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  &.left {
    left: 0;
  }

  &.right {
    right: 0;
  }
`;

const CardContainer = styled.div`
  width: 100%;

  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.3s ease-out;

  transform: rotateY(calc(var(--offset) * 50deg))
    scaleY(calc(1 + var(--abs-offset) * -0.4))
    translateZ(calc(var(--abs-offset) * -30rem))
    translateX(calc(var(--direction) * -5rem));
  filter: blur(calc(var(--abs-offset) * 0.5rem));
`;

const ProjectName = styled.div`
  color: white;
  //   background-color: aqua;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
  line-height: 4rem;
  font-size: 1.8rem;
  transform: translateY(-100%);
`;

const CardWrapper = styled.div`
  width: 100%;
  min-height: 50vh;
  border-radius: 10px;
  background-color: hsl(313deg, 40%, calc(100% - var(--abs-offset) * 50%));
`;

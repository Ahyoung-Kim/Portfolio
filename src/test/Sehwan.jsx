import React, { useEffect, useRef, useState } from "react";

import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
const data = [
  {
    student: "20210723",
    title: "1안",
    track: "다전공 1전공 - 21",
    roadmap_detail: [
      {
        "1-1": [
          {
            id: 1,
            common_name: "성찰과 성장",
            roadmap_detail: 1,
            commonlecture: 1,
          },
          {
            id: 2,
            common_name: "중국언어와 문화1",
            roadmap_detail: 1,
            commonlecture: 7,
          },
          {
            id: 3,
            common_name: "초급 아랍어",
            roadmap_detail: 1,
            commonlecture: 13,
          },
          {
            id: 6,
            cse_name: "응용수학2",
            roadmap_detail: 1,
            cselecture: 6,
          },
          {
            id: 7,
            mgt_name: "조직행동이론",
            roadmap_detail: 1,
            mgtlecture: 6,
          },
          {
            id: 8,
            eco_name: "산업경제학",
            roadmap_detail: 1,
            ecolecture: 13,
          },
        ],
      },
      {
        "1-2": [
          {
            id: 9,
            common_name: "프랑스언어와 문화1",
            roadmap_detail: 2,
            commonlecture: 6,
          },
          {
            id: 12,
            mgt_name: "재무관리",
            roadmap_detail: 2,
            mgtlecture: 7,
          },
        ],
      },
      {
        "2-1": [
          {
            id: 13,
            cse_name: "일반물리1",
            roadmap_detail: 3,
            cselecture: 4,
          },
          {
            id: 14,
            eco_name: "경제정보분석",
            roadmap_detail: 3,
            ecolecture: 12,
          },
          {
            id: 15,
            eco_name: "미적분학 II",
            roadmap_detail: 3,
            ecolecture: 4,
          },
        ],
      },
      {
        "2-2": [
          {
            id: 16,
            cse_name: "응용수학1",
            roadmap_detail: 4,
            cselecture: 5,
          },
          {
            id: 17,
            cse_name: "일반물리실험1",
            roadmap_detail: 4,
            cselecture: 3,
          },
          {
            id: 18,
            eco_name: "경제수리기초",
            roadmap_detail: 4,
            ecolecture: 2,
          },
        ],
      },
      {
        "3-1": [
          {
            id: 16,
            cse_name: "응용수학1",
            roadmap_detail: 4,
            cselecture: 5,
          },
          {
            id: 17,
            cse_name: "일반물리실험1",
            roadmap_detail: 4,
            cselecture: 3,
          },
          {
            id: 18,
            eco_name: "경제수리기초",
            roadmap_detail: 4,
            ecolecture: 2,
          },
        ],
      },
      {
        "3-2": [
          {
            id: 16,
            cse_name: "응용수학1",
            roadmap_detail: 4,
            cselecture: 5,
          },
          {
            id: 17,
            cse_name: "일반물리실험1",
            roadmap_detail: 4,
            cselecture: 3,
          },
          {
            id: 18,
            eco_name: "경제수리기초",
            roadmap_detail: 4,
            ecolecture: 2,
          },
        ],
      },
      {
        "4-1": [
          {
            id: 16,
            cse_name: "응용수학1",
            roadmap_detail: 4,
            cselecture: 5,
          },
          {
            id: 17,
            cse_name: "일반물리실험1",
            roadmap_detail: 4,
            cselecture: 3,
          },
          {
            id: 18,
            eco_name: "경제수리기초",
            roadmap_detail: 4,
            ecolecture: 2,
          },
        ],
      },
      {
        "4-2": [
          {
            id: 16,
            cse_name: "응용수학1",
            roadmap_detail: 4,
            cselecture: 5,
          },
          {
            id: 17,
            cse_name: "일반물리실험1",
            roadmap_detail: 4,
            cselecture: 3,
          },
          {
            id: 18,
            eco_name: "경제수리기초",
            roadmap_detail: 4,
            ecolecture: 2,
          },
        ],
      },
    ],
  },
  {
    student: "20210723",
    title: "2안",
    track: "단일전공 - 21",
    roadmap_detail: [
      // …
    ],
  },
];

const Semester = ({ semester, courses, deg, z }) => {
  // console.log({ deg, z });

  return (
    <CourseBox
      style={{
        transform: `rotateY(${deg}deg) translateZ(${z}px)`,
      }}
    >
      <CourseTopBox>
        {semester}
        {/* <SemesterText>{semester}</SemesterText> */}
      </CourseTopBox>

      <CourseBottomBox>
        {courses.map((course, idx) => {
          const { id, common_name, cse_name, mgt_name, eco_name } = course;

          return (
            <div key={id}>
              {common_name || cse_name || mgt_name || eco_name}
            </div>
          );
        })}
      </CourseBottomBox>
    </CourseBox>
  );
};

const RoadmapDetail = ({ detail }) => {
  const ref = useRef();
  const len = detail.length;
  const theta = 360 / len;

  const [z, setZ] = useState(0);
  const [currentDeg, setCurrentDeg] = useState(0);

  const handleResize = () => {
    const _width = ref.current.offsetWidth / 2;

    const rad = (theta / 2) * (Math.PI / 180);
    const tan = Math.tan(rad);
    const _z = _width / tan;

    // console.log({ len, theta, tan, _z });

    setZ(_z);
  };

  const handleClickChevron = (isLeft) => {
    if (isLeft) {
      // if (currentDeg === 0) {
      //   setCurrentDeg(360 - theta);
      // } else {
      //   setCurrentDeg(currentDeg - theta);
      // }
      setCurrentDeg(currentDeg - theta);
    } else {
      // if (currentDeg === 360 - theta) {
      //   setCurrentDeg(0);
      // } else {
      //   setCurrentDeg(currentDeg + theta);
      // }
      setCurrentDeg(currentDeg + theta);
    }
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    if (window) {
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <Scene>
      <CoursesContainer
        ref={ref}
        style={{
          transform: `rotateY(-${currentDeg}deg)`,
          transition: "0.45s",
        }}
      >
        {detail.map((detailData, idx) => {
          const semester = Object.keys(detailData)[0];

          return (
            <Semester
              key={`${semester}${idx}`}
              deg={idx * theta}
              semester={semester}
              courses={detailData[semester]}
              z={z}
            />
          );
        })}
      </CoursesContainer>

      <Button className="left" onClick={() => handleClickChevron(true)}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </Button>
      <Button className="right" onClick={handleClickChevron.bind(this, false)}>
        <FontAwesomeIcon icon={faChevronRight} />
      </Button>
    </Scene>
  );
};

const Sehwan = () => {
  return (
    <Container>
      {data.map((roadmap, idx) => {
        const { student, title, track, roadmap_detail } = roadmap;

        return (
          <RoadmapContainer key={`${student}${track}`}>
            {/* 공통 */}
            <SemesterBox>
              <SemesterInfo>
                <RoadmapWrapper>
                  <SemesterNumber>#{idx + 1}</SemesterNumber>
                </RoadmapWrapper>

                <MyRoadmapText>MY ROADMAP</MyRoadmapText>
              </SemesterInfo>
            </SemesterBox>

            {roadmap_detail && roadmap_detail.length > 0 && (
              <RoadmapDetail detail={roadmap_detail} />
            )}
          </RoadmapContainer>
        );
      })}
    </Container>
  );
};

export default Sehwan;

const Container = styled.div`
  width: 100%;
  background-color: whitesmoke;
  margin-top: 300px;
`;

const RoadmapContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  // background-color: orange;
  position: relative;
`;

const SemesterBox = styled.div`
  //   width: 60vw;
  //   height: 10vh;
  width: 100%;
  padding: 1rem 1.5rem;

  border-radius: 41px 0px;
  border: 5px solid #fff;
  background: #ffaec6;
  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  //   margin: 10px;
  flex-shrink: 0;
  flex-direction: column;
`;

const SemesterInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  //   align-items: center;
  //   justify-content: space-between;
  //   margin-right: 10px; // 필요에 따라 간격 조정
`;

const RoadmapWrapper = styled.div`
  //   width: 5.89vw;
  //   height: 2.04vh;
  //   background: #ff6262;
  //   position: relative;
  //   margin-left: 30%;

  background-color: #ff6262;
  width: max-content;
  height: max-content;
  height: 1rem;
  position: relative;
  display: flex;
  align-items: center;
`;

const SemesterNumber = styled.span`
  //   color: #fff;
  //   text-align: center;
  //   font-family: "BM JUA_TTF";
  // //   font-size: 2.4em;
  //   font-weight: 600;
  // //   position: absolute;
  //   bottom: -100%;
  //   right: 30%;

  display: inline-block;
  color: #fff;
  font-size: 2rem;
  padding: 0 1rem;
  //   background-color: rgba(0, 0, 0, 0.3);
`;

const MyRoadmapText = styled.span`
  //   color: #fff;
  //   text-align: center;
  //   font-family: "Cafe24 Ohsquare";
  //     font-size: 0.8em;
  //   font-weight: 700;
  //     line-height: 106.5%;
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  //   position: absolute;
  //   top: 150%;

  font-size: 0.8rem;
  color: #fff;
`;

const Scene = styled.div`
  display: flex;
  justify-content: center;
  // align-items: center;
  perspective: 3000px;
  transform-style: preserve-3d;
  // width: 100%;
  width: 60%;
  height: 30vh;
  padding: 5vh 0;
  // background-color: tomato;
  margin: 0 auto;
  position: relative;
  // position: absolute;
  // top: 0;
  // right: 0;
  // z-index: 100;
`;

const CoursesContainer = styled.div`
  display: flex;
  flex-direction: row; // 과목들을 가로로 배열
  justify-content: center;
  position: relative;
  width: 40%;
  transform-style: preserve-3d;
`;

const CourseBox = styled.div`
  //   width: 15vw;
  //   height: 30vh;
  //   flex-shrink: 0;
  //   display: flex;
  //   flex-direction: column;

  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  // background-color: white;
  width: 100%;
  height: 20vh;
  padding: 0 0.5rem;
`;

const CourseTopBox = styled.div`
  //   width: 12vw;
  //   height: 7vh;
  //   flex-shrink: 0;
  //   border-radius: 20px 20px 0px 0px;
  //   background: #ff8c8c;
  //   box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.2);
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;

  width: 100%;
  // padding: 0.5rem 1rem;
  background-color: #ff8c8c;
  text-align: center;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.2);
  border-radius: 20px 20px 0px 0px;
  color: #fff;
  font-size: 2rem;
  line-height: 3.5rem;
`;

const CourseBottomBox = styled.div`
  //   width: 12vw; /* 예시: 186px를 vw로 변환 */
  //   height: auto;
  //   flex-shrink: 0;

  height: calc(100% - 3.5rem);
  border-radius: 0px 0px 20px 20px;
  background: #fff;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.2);
`;

const SemesterText = styled.span`
  //   width: 5vw;
  //   height: 5vh;
  //   flex-shrink: 0;
  //   color: #fff;
  //   font-family: "BM JUA_TTF";
  //   font-size: 40px;
  //   line-height: normal;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
`;

const Button = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 100%;
  background-color: black;
  position: absolute;
  top: calc(15vh - 15px);
  cursor: pointer;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  &.left {
    left: -40px;
  }
  &.right {
    right: -40px;
  }
`;

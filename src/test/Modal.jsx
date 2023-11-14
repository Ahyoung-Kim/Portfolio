import React from "react";
import { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import Sehwan from "./Sehwan";

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

const RoadmapComponent = ({}) => {
  const [angle, setAngle] = useState(0); // 회전 각도 상태
  const [selectedIndex, setSelectedIndex] = useState(0); // 현재 선택된 캐러셀 학기의 인덱스를 저장하기 위한 상태 변수
  // const numberOfItems = useRef(0); // 캐러셀 아이템 수
  // const theta = useRef(0); // 각 아이템의 각도

  // useEffect(() => {
  //   numberOfItems.current = data.length;
  //   theta.current = 360 / numberOfItems.current;
  // }, [data]);

  // useEffect(() => {
  //   setAngle(selectedIndex * theta.current);
  // }, [selectedIndex]);

  // function handlePrev() {
  //   setSelectedIndex((prevIndex) => {
  //     const newIndex =
  //       prevIndex - 1 < 0 ? numberOfItems.current - 1 : prevIndex - 1;
  //     setAngle(newIndex * theta.current);
  //     return newIndex;
  //   });
  // }
  // function handleNext() {
  //   setSelectedIndex((prevIndex) => {
  //     const newIndex =
  //       prevIndex + 1 >= numberOfItems.current ? 0 : prevIndex + 1;
  //     setAngle(newIndex * theta.current);
  //     return newIndex;
  //   });
  // }

  const [current, setCurrent] = useState(0);

  const handlePrev = (theta) => {
    if (current == 0) {
      setCurrent(360 - theta);
    } else {
      setCurrent(current - theta);
    }
  };
  const handleNext = (theta) => {
    if (current == 360 - theta) {
      setCurrent(0);
    } else {
      console.log(current + theta);
      setCurrent(current + theta);
    }
  };
  return (
    <div>
      {/* {data.map((entry, entryIndex) => {
        const len = entry.roadmap_detail.length;
        const theta = 360 / len;
        const tan = Math.tanh(theta / 2);
        const z = `calc(7.5vw / ${tan})`;

        return (
          <div key={entryIndex}>
            <SemesterBox>
              <SemesterInfo>
                <RoadmapWrapper>
                  <SemesterNumber>#{entryIndex + 1}</SemesterNumber>
                  <MyRoadmapText>MY ROADMAP</MyRoadmapText>
                </RoadmapWrapper>
              </SemesterInfo>
            </SemesterBox>

            <button onClick={handlePrev.bind(this, theta)}>Previous</button>
            <button onClick={handleNext.bind(this, theta)}>Next</button>

            <Scene>
              <CoursesContainer
                key={entryIndex}
                style={{
                  transform: `rotateY(-${current}deg)`,
                  transition: "0.45s",
                }}
              >
                {entry.roadmap_detail.length > 0 &&
                  entry.roadmap_detail.map((detail, idx) => {
                    const semester = Object.keys(detail)[0];
                    const courses = detail[semester];
                    const deg = idx * theta;

                    // 해당 학기의 데이터가 없거나 비어 있을 때는 렌더링x
                    if (!courses || courses.length === 0) {
                      return null;
                    }

                    return (
                      <CourseBox
                        key={semester}
                        style={{
                          transform: `rotateY(${deg}deg) translateZ(${z})`,
                        }}
                      >
                        <CourseTopBox>
                          <SemesterText>{semester}</SemesterText>
                        </CourseTopBox>
                        <CourseBottomBox>
                          {courses.map((course) => (
                            <div key={course.id}>
                              {course.common_name ||
                                course.cse_name ||
                                course.mgt_name ||
                                course.eco_name}
                            </div>
                          ))}
                        </CourseBottomBox>
                      </CourseBox>
                    );
                  })}
              </CoursesContainer>
            </Scene>
          </div>
        );
      })} */}

      <Sehwan />
    </div>
  );
};

const Scene = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 3500px;
  transform-style: preserve-3d;
`;

const SemesterBox = styled.div`
  width: 60vw;
  height: 10vh;
  border-radius: 41px 0px;
  border: 5px solid #fff;
  background: #ffaec6;
  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin: 10px;
  flex-shrink: 0;
  flex-direction: column;
`;

const SemesterInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-right: 10px; // 필요에 따라 간격 조정
`;
const SemesterNumber = styled.span`
  color: #fff;
  text-align: center;
  font-family: "BM JUA_TTF";
  font-size: 2.4em;
  font-weight: 600;
  position: absolute;
  bottom: -100%;
  right: 30%;
`;
const RoadmapWrapper = styled.div`
  width: 5.89vw;
  height: 2.04vh;
  background: #ff6262;
  position: relative;
  margin-left: 30%;
`;

const MyRoadmapText = styled.span`
  color: #fff;
  text-align: center;
  font-family: "Cafe24 Ohsquare";
  font-size: 0.8em;
  font-weight: 700;
  line-height: 106.5%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 150%;
`;
const CoursesContainer = styled.div`
  display: flex;
  flex-direction: row; // 과목들을 가로로 배열
  justify-content: center;
  position: relative;

  width: 15vw;
  // perspective: 1000px;
  transform-style: preserve-3d;
`;

const CourseBox = styled.div`
  width: 15vw;
  height: 30vh;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;

  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CourseTopBox = styled.div`
  width: 12vw;
  height: 7vh;
  flex-shrink: 0;
  border-radius: 20px 20px 0px 0px;
  background: #ff8c8c;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CourseBottomBox = styled.div`
  width: 12vw; /* 예시: 186px를 vw로 변환 */
  height: auto;
  flex-shrink: 0;
  border-radius: 0px 0px 20px 20px;
  background: #fff;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.2);
`;

const SemesterText = styled.span`
  width: 5vw;
  height: 5vh;
  flex-shrink: 0;
  color: #fff;
  font-family: "BM JUA_TTF";
  font-size: 40px;
  line-height: normal;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default RoadmapComponent;

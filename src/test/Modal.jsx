import React from "react";
import styled from "styled-components";

const DummyData = [
  {
    student: "20210723",
    title: "1안",
    track: "다전공 1전공 - 21",
    roadmap_detail: [
      {
        semester: "1-1",
        data: [
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
        semester: "1-2",
        data: [
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
        semester: "2-1",
        data: [
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
        semester: "2-2",
        data: [
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

const RoadmapComponent = ({ data }) => {
  const semesters = ["1-1", "1-2", "2-1", "2-2", "3-1", "3-2", "4-1", "4-2"];

  return (
    <div>
      {DummyData.map((entry, entryIndex) => (
        <SemesterContainer key={entryIndex}>
          <SemesterBox>
            <SemesterInfo>
              <RoadmapWrapper>
                <SemesterNumber>#{entryIndex + 1}</SemesterNumber>
                <MyRoadmapText>MY ROADMAP</MyRoadmapText>
              </RoadmapWrapper>
            </SemesterInfo>
          </SemesterBox>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            {entry.roadmap_detail &&
              entry.roadmap_detail.length > 0 &&
              entry.roadmap_detail.map((roadmap, idx) => (
                <CoursesContainer key={`${entry.track}${roadmap.semester}`}>
                  <CourseBox>
                    <CourseTopBox>
                      <SemesterText>{roadmap.semester}</SemesterText>
                    </CourseTopBox>
                    <CourseBottomBox>
                      {roadmap.data.map((detail, idx) => (
                        <div key={`${roadmap.semester}${detail.id}`}>
                          {detail.common_name ||
                            detail.cse_name ||
                            detail.mgt_name ||
                            detail.eco_name}
                        </div>
                      ))}
                    </CourseBottomBox>
                  </CourseBox>
                </CoursesContainer>
              ))}
          </div>
        </SemesterContainer>
      ))}
    </div>
  );
};

const SemesterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CoursesContainer = styled.div`
  display: flex;
  flex-direction: row; // 과목들을 가로로 배열
  justify-content: space-between; // 과목들 사이의 간격 조정
  align-items: flex-start;
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
  z-index: 1;
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

const CourseBox = styled.div`
  width: 15vw;
  height: 30vh;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
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

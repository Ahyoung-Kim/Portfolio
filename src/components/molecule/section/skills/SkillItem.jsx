import React, { useState } from "react";

import styled from "styled-components";
import colors from "../../../../common/colors";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleDown,
  faChevronCircleUp,
} from "@fortawesome/free-solid-svg-icons";

import WhiteBox from "../../../atomic/common/WhiteBox";
import LinearText from "../../../atomic/common/LinearText";
import EachSkill from "./EachSkill";
import SkillImage from "../../../atomic/section/skills/SkillImage";

const SkillItem = ({ label, skills, clickable = true }) => {
  const [detail, setDetail] = useState(false);

  const onClick = () => {
    if (clickable) {
      setDetail(!detail);
    }
  };

  return (
    <Container onClick={onClick}>
      <WhiteBox transparent={false}>
        <LabelDiv>
          <LinearText
            style={{
              fontSize: "1.5rem",
              fontFamily: "Yeongdeok",
              lineHeight: "3rem",
            }}
          >
            {label}
          </LinearText>

          {clickable && (
            <FontAwesomeIcon
              icon={detail ? faChevronCircleUp : faChevronCircleDown}
              color={colors.COLOR_PURPLE}
              style={{ fontSize: "1rem" }}
            />
          )}
        </LabelDiv>

        <SkillWrapper className={detail ? "detail" : ""}>
          {skills &&
            skills.map((skill, index) =>
              !detail ? (
                <SkillImage key={`skill_image_${skill.src}`} src={skill.src} />
              ) : (
                <EachSkill
                  key={`skill_image_${skill.src}`}
                  src={skill.src}
                  text={skill.text}
                  index={index}
                />
              )
            )}
        </SkillWrapper>
      </WhiteBox>
    </Container>
  );
};

export default SkillItem;

const Container = styled.div`
  width: 100%;
  cursor: pointer;
  transition: 0.4s;
  padding: 1rem 0;

  &:hover {
    transform: translateY(-1rem);
  }
`;

const LabelDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  //   background-color: orange;
  width: 100%;
  margin-bottom: 1rem;
  border-bottom: 1px solid ${colors.COLOR_GRAY_BORDER};
`;

const SkillWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  transition: 0.4s;

  &.detail {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Image = styled.img``;

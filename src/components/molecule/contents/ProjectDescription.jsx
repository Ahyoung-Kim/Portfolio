import React from "react";

import styled from "styled-components";
import colors from "../../../common/colors";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faUserGroup,
  faThumbTack,
  faStar,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";

const ProjectDescription = ({ data }) => {
  const {
    id,
    name,
    type,
    startDate,
    endDate,
    introduction,
    functions,
    comment,
  } = data;

  return (
    <>
      <TextWrapper>
        {/* type */}
        <TextItem>
          <Icon>
            <FontAwesomeIcon
              icon={faUserGroup}
              style={{ color: colors.COLOR_GRAY_ICON }}
            />
          </Icon>

          <Text>{type}</Text>
        </TextItem>

        {/* period */}
        <TextItem>
          <Icon>
            <FontAwesomeIcon
              icon={faCalendarDays}
              style={{ color: colors.COLOR_BLUE_ICON }}
            />
          </Icon>
          <Text>
            {startDate} ~ {endDate ? endDate : ""}
          </Text>
        </TextItem>

        {/* introduction */}
        <TextItem>
          <Icon>
            <FontAwesomeIcon
              icon={faThumbTack}
              style={{ color: colors.COLOR_RED_ICON }}
            />
          </Icon>
          <Text>{introduction}</Text>
        </TextItem>

        {/* functions */}
        {functions && functions.length > 0 && (
          <TextItemWrapper>
            <TextItem>
              <Icon>
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: colors.COLOR_YELLOW_ICON }}
                />
              </Icon>
              <Text>주요 기능</Text>
            </TextItem>

            <TextUl>
              {functions.map((text, idx) => (
                <TextLi key={`${id}_${idx}`}>{text}</TextLi>
              ))}
            </TextUl>
          </TextItemWrapper>
        )}

        {/* comment */}
        {comment && (
          <TextItem>
            <Icon>
              <FontAwesomeIcon
                icon={faCommentDots}
                style={{ color: colors.COLOR_GREEN_ICON }}
              />
            </Icon>
            <Text>{comment}</Text>
          </TextItem>
        )}
      </TextWrapper>
    </>
  );
};

export default ProjectDescription;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextItemWrapper = styled.div`
  //   background-color: aqua;
  padding-bottom: 0.6rem;
`;

const TextItem = styled.div`
  padding-bottom: 0.6rem;
  display: flex;
  line-height: 1.5rem;
`;

const Icon = styled.div``;

const Text = styled.p`
  margin-left: 0.3rem;
  color: ${colors.COLOR_GRAY_TEXT};
`;

const TextUl = styled.ul`
  line-height: 1.5rem;
  color: ${colors.COLOR_GRAY_TEXT};
  padding-left: 2rem;
  //   background-color: orange;
`;

const TextLi = styled.li`
  list-style: inside;
`;

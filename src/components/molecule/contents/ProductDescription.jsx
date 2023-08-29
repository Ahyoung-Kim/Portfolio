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

const ProductDescription = ({
  type,
  period,
  description,
  functions,
  comment,
}) => {
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

          <Text>1인 개인 프로젝트</Text>
        </TextItem>

        {/* period */}
        <TextItem>
          <Icon>
            <FontAwesomeIcon
              icon={faCalendarDays}
              style={{ color: colors.COLOR_BLUE_ICON }}
            />
          </Icon>
          <Text>2023.01 ~ 2023.02</Text>
        </TextItem>

        {/* description */}
        <TextItem>
          <Icon>
            <FontAwesomeIcon
              icon={faThumbTack}
              style={{ color: colors.COLOR_RED_ICON }}
            />
          </Icon>
          <Text>
            프로젝트 설명 부분프로젝트 설명 부분프로젝트 설명 부분프로젝트 설명
            부분프로젝트 설명 부분프로젝트 설명 부분프로젝트 설명 부분
          </Text>
        </TextItem>

        {/* functions */}
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
            <TextLi>
              주요 기능 설명주요 기능 설명주요 기능 설명주요 기능 설명주요 기능
              설명
            </TextLi>
            <TextLi>주요 기능 설명</TextLi>
            <TextLi>주요 기능 설명</TextLi>
          </TextUl>
        </TextItemWrapper>

        {/* comment */}
        <TextItem>
          <Icon>
            <FontAwesomeIcon
              icon={faCommentDots}
              style={{ color: colors.COLOR_GREEN_ICON }}
            />
          </Icon>
          <Text>프로젝트 특이 사항 코멘트</Text>
        </TextItem>
      </TextWrapper>
    </>
  );
};

export default ProductDescription;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextItemWrapper = styled.div`
  //   background-color: aqua;
  padding-bottom: 0.6rem;
`;

const TextItem = styled.div`
  font-size: 0.8rem;
  padding-bottom: 0.6rem;
  display: flex;
  line-height: 1.2rem;
`;

const Icon = styled.div``;

const Text = styled.p`
  margin-left: 0.3rem;
  color: ${colors.COLOR_GRAY_TEXT};
`;

const TextUl = styled.ul`
  line-height: 1.2rem;
  font-size: 0.8rem;
  color: ${colors.COLOR_GRAY_TEXT};
  padding-left: 2rem;
  //   background-color: orange;
`;

const TextLi = styled.li`
  list-style: inside;
`;

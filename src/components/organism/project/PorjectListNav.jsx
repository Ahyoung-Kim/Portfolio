import React, { useState } from "react";

import styled, { keyframes } from "styled-components";
import colors from "../../../common/colors";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faStar,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

import { useMediaQueries } from "../../layout/MediaQuery";
import Data from "../../../constants/Data";
import LinearText from "../../atomic/common/LinearText";
import { useNavigate } from "react-router-dom";

const ProjectList = ({
  projectId,
  setOpenMenu = () => {},
  animation = false,
}) => {
  const { isMobile, isPc, isTablet } = useMediaQueries();

  const closeMenu = () => {
    if (isPc) return;

    setOpenMenu(false);
  };

  const navigate = useNavigate();
  const onClickProjectName = (id) => {
    closeMenu();
    navigate(`/projects/${id}`);
  };

  return (
    <Container
      style={
        isPc
          ? { width: "25%" }
          : {
              width: "100%",
              backgroundColor: colors.COLOR_TRANSPARENT_BACKGROUND,
            }
      }
      onClick={closeMenu}
    >
      <MenuDiv
        className={animation ? "slideIn" : ""}
        style={{ width: isPc ? "100%" : isTablet ? "40%" : "70%" }}
      >
        <MenuHeader className="bold-text">
          <FontAwesomeIcon icon={faList} style={{ marginRight: "0.5rem" }} />
          프로젝트 목록
        </MenuHeader>

        <ProjectUl>
          {Object.keys(Data).map((key, idx) => {
            const focused = key === projectId;
            const name = Data[key].name;

            return (
              <ProjectLi
                key={`project_nav_${key}_${idx}`}
                className={focused ? "focused" : ""}
                onClick={onClickProjectName.bind(this, key)}
              >
                <StarIcon style={focused ? { color: colors.COLOR_PINK } : {}}>
                  <FontAwesomeIcon icon={faStar} />
                </StarIcon>

                {focused ? (
                  <LinearText style={{ fontWeight: "bold", fontSize: "1rem" }}>
                    {name}
                  </LinearText>
                ) : (
                  <ProjectNmae>{name}</ProjectNmae>
                )}
              </ProjectLi>
            );
          })}
        </ProjectUl>
      </MenuDiv>
    </Container>
  );
};

const PorjectListNav = ({ projectId }) => {
  const { isMobile, isPc, isTablet } = useMediaQueries();
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      {isPc ? (
        <ProjectList projectId={projectId} />
      ) : (
        <>
          {openMenu ? (
            <ProjectList
              projectId={projectId}
              setOpenMenu={setOpenMenu}
              animation={true}
            />
          ) : (
            <MenuButton onClick={() => setOpenMenu(true)}>
              <FontAwesomeIcon icon={faList} />
            </MenuButton>
          )}
        </>
      )}
    </>
  );
};

export default PorjectListNav;

const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 100;
  height: 100%;
  padding: 10% 2%;
  display: flex;
  justify-content: flex-end;
`;

const MenuButton = styled.div`
  position: fixed;
  right: 0;
  top: 5%;
  cursor: pointer;
  background-color: white;
  box-shadow: -5px 5px 10px 0 ${colors.COLOR_BOX_SHADOW};
  color: ${colors.COLOR_GRAY_ICON};
  padding: 1rem 0.5rem;
  border-radius: 5px 0 0 5px;
`;

const slideIn = keyframes`
from {
    transform: translateX(100%);
}
to {
    transform: translateX(0);
}
`;

const MenuDiv = styled.div`
  width: 100%;
  height: max-content;
  background-color: white;
  box-shadow: 10px 10px 20px 0 ${colors.COLOR_BOX_SHADOW};
  border-radius: 0.8rem;
  padding: 2rem 1.5rem 4rem;

  &.slideIn {
    animation: ${slideIn} 0.5s ease;
  }
`;

const MenuHeader = styled.div`
  // background-color: orange;
  color: ${colors.COLOR_GRAY_TEXT};
  font-size: 1.2rem;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid ${colors.COLOR_GRAY_BORDER};
  display: flex;
  align-items: center;
`;

const ProjectUl = styled.ul`
  font-size: 0.8rem;
  color: ${colors.COLOR_GRAY_ICON};
`;

const ProjectLi = styled.li`
  line-height: 1.6rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
  display: flex;
  transition: 0.45s;

  &:hover {
    color: ${colors.COLOR_PINK};
    font-weight: bold;
  }
`;

const StarIcon = styled.div`
  display: flex;
  align-items: center;
  height: 1.6rem;
  margin-right: 0.3rem;
  font-size: 0.6rem;
`;

const ProjectNmae = styled.span``;

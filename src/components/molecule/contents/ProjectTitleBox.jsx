import React from "react";

import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { useMediaQueries } from "../../layout/MediaQuery";
import { useNavigate } from "react-router-dom";

const ProjectTitleBox = ({ title }) => {
  const { isMobile } = useMediaQueries();
  const naviagte = useNavigate();

  const goProjectPage = () => {
    naviagte("/projects/1");
  };

  return (
    <TitleDiv>
      <div style={{ flex: 1 }} />
      <Title style={{ flex: 3 }} className="bold-text">
        프로젝트 이름
      </Title>

      <div
        onClick={goProjectPage}
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        {isMobile ? (
          <FontAwesomeIcon
            icon={faInfoCircle}
            style={{ color: "black", fontSize: "1.5rem" }}
          />
        ) : (
          <DetailButton>
            DETAIL
            <FontAwesomeIcon
              icon={faInfoCircle}
              style={{ marginLeft: "3px" }}
            />
          </DetailButton>
        )}
      </div>
    </TitleDiv>
  );
};

export default ProjectTitleBox;

const TitleDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1.8rem;
`;

const Title = styled.p`
  font-size: 1.5rem;
  text-align: center;
  line-height: 2.2rem;
`;

const DetailButton = styled.p`
  width: max-content;
  text-align: end;
  font-size: 0.8rem;
  transition: 0.45s;
  border-radius: 5px;
  border: 2px solid black;
  color: white;
  background-color: black;
  cursor: pointer;
  padding: 3px 8px;

  &:hover {
    background-color: white;
    color: black;
  }
`;

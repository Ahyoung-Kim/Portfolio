import React from "react";
import styled from "styled-components";
import { PUBLIC_URL } from "../../../common/config";
import colors from "../../../common/colors";

const GithubLink = ({ link }) => {
  return (
    <Container>
      <GithubLogo src={`${PUBLIC_URL}/img/github-icon.png`} />

      <Link href={link} target="_blank">
        Source Code
      </Link>
    </Container>
  );
};

export default GithubLink;

const Container = styled.div`
  display: flex;
  align-items: center;
  //   background-color: orange;
  margin: 15px 0;
`;

const GithubLogo = styled.img`
  width: 1.5rem;
  object-fit: contain;
`;

const Link = styled.a`
  text-decoration: none;
  font-weight: bold;
  margin-left: 0.5rem;
  cursor: pointer;
  padding: 3px 9px;
  border-radius: 5px;
  background-color: black;
  color: white;
  border: 2px solid black;
  transition: 0.45s;
  font-size: 0.8rem;

  &:hover {
    color: black;
    background-color: white;
  }
`;

import React from "react";
import styled from "styled-components";
import { PUBLIC_URL } from "../../../common/config";
import colors from "../../../common/colors";

const GithubLink = ({ link = "https://github.com/Ahyoung-Kim" }) => {
  return (
    <Container>
      <GithubLogo src={`${PUBLIC_URL}/img/github.png`} />

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
  width: 2rem;
`;

const Link = styled.a`
  text-decoration: none;
  font-weight: bold;
  margin-left: 3px;
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

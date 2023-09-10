import React from "react";

import styled from "styled-components";
import colors from "../../../../common/colors";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import { PUBLIC_URL } from "../../../../common/config";

const ProfileLink = ({ link, text, image }) => {
  return (
    <Container>
      <Image src={`${PUBLIC_URL}/img/${image}`} />
      <Text href={link} target="_blank">
        {text ? text : link}
      </Text>

      <FontAwesomeIcon icon={faLink} style={{ fontSize: "0.8rem" }} />
    </Container>
  );
};

export default ProfileLink;

const Container = styled.div`
  display: flex;
  align-items: center;
  //   background-color: orange;
`;

const Image = styled.img`
  display: inline-block;
  //   background-color: aqua;
  width: 1rem;
  object-fit: contain;
`;

const Text = styled.a`
  cursor: pointer;
  font-size: 0.9rem;
  text-decoration: none;
  //   color: ${colors.COLOR_LINK};
  color: inherit;
  margin: 0 0.5rem;
`;

import React from "react";

import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import colors from "../../../common/colors";

const LinkText = ({ link }) => {
  if (!link) {
    return <></>;
  }
  return (
    <Container>
      <FontAwesomeIcon icon={faPaperclip} />
      <A href={link} target="_blank">
        {link}
      </A>
    </Container>
  );
};

export default LinkText;

const Container = styled.div`
  font-size: 0.8rem;
  color: ${colors.COLOR_BLUE_TEXT};
  padding: 5px 0;
`;

const A = styled.a`
  color: inherit;
  text-decoration: none;
  font-weight: bold;
  margin-left: 3px;
  cursor: pointer;
`;

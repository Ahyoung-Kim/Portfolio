import React from "react";

import styled from "styled-components";
import colors from "../../../../common/colors";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CareerIconText = ({ icon, text }) => {
  return (
    <Container>
      <FontAwesomeIcon icon={icon} />
      <Text>{text}</Text>
    </Container>
  );
};

export default CareerIconText;

const Container = styled.div`
  color: ${colors.COLOR_GRAY_TEXT};
  padding: 0.5rem 0;
`;

const Text = styled.span`
  margin-left: 0.5rem;
`;

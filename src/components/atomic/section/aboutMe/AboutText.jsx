import React from "react";
import styled from "styled-components";
import colors from "../../../../common/colors";

const AboutText = ({ text }) => {
  return <Container>{text}</Container>;
};

export default AboutText;

const Container = styled.p`
  color: ${colors.COLOR_GRAY_TEXT};
`;

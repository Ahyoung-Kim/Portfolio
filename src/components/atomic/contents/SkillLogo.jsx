import React from "react";
import styled from "styled-components";

const SkillLogo = ({ src }) => {
  return <Logo src={src} />;
};

export default SkillLogo;

const Logo = styled.img`
  display: inline-block;
  width: 20%;
  object-fit: cover;
  //   background-color: orange;
`;

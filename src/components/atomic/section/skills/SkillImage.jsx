import React from "react";

import styled from "styled-components";
import { useMediaQueries } from "../../../layout/MediaQuery";

const SkillImage = ({ src }) => {
  const { isMobile } = useMediaQueries();

  return <Image src={src} style={{ width: isMobile ? "20%" : "10%" }} />;
};

export default SkillImage;

const Image = styled.img`
  display: inline-block;
  object-fit: contain;
`;

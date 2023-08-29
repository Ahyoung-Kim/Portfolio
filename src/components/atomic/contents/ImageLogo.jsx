import React from "react";

import styled from "styled-components";
import { PUBLIC_URL } from "../../../common/config";

const ImageLogo = ({ src, width = "15%" }) => {
  return <Logo src={`${PUBLIC_URL}/${src}`} style={{ width }} />;
};

export default ImageLogo;

const Logo = styled.img`
  object-fit: cover;
  display: inline-block;
`;

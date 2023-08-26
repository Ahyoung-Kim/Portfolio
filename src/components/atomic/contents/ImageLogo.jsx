import React from "react";

import styled from "styled-components";

const ImageLogo = ({ src, width = "15%" }) => {
  return <Logo src={src} style={{ width }} />;
};

export default ImageLogo;

const Logo = styled.img`
  object-fit: cover;
  display: inline-block;
`;

import React from "react";
import styled from "styled-components";

import { PC, Tablet, Mobile } from "../../layout/MediaQuery";

const SkillLogo = ({ src }) => {
  return (
    <>
      <PC>
        <Logo src={src} />
      </PC>

      <Tablet>
        <Logo src={src} style={{ width: "33%" }} />
      </Tablet>

      <Mobile>
        <Logo src={src} style={{ width: "50%" }} />
      </Mobile>
    </>
  );
};

export default SkillLogo;

const Logo = styled.img`
  display: inline-block;
  width: 20%;
  object-fit: cover;
  //   background-color: orange;
`;

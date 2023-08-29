import React from "react";
import styled from "styled-components";

import { PC, Tablet, Mobile } from "../../layout/MediaQuery";
import { PUBLIC_URL } from "../../../common/config";

const SkillLogo = ({ src }) => {
  const source = `${PUBLIC_URL}/${src}`;

  return (
    <>
      <PC>
        <Logo src={source} />
      </PC>

      <Tablet>
        <Logo src={source} style={{ width: "33%" }} />
      </Tablet>

      <Mobile>
        <Logo src={source} style={{ width: "50%" }} />
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

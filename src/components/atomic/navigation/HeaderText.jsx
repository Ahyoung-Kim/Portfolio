import React from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

const HeaderText = () => {
  const navigate = useNavigate();

  const goMainPage = () => {
    navigate("/");
  };

  return <Text onClick={goMainPage}>Ahyoung's Portfolio</Text>;
};

export default HeaderText;

const Text = styled.p`
  font-weight: bold;
  font-size: 1.4rem;
  cursor: pointer;
  //   color: rgba(255, 255, 255, 0.8);
`;

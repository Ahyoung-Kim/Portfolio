import React from "react";
import styled from "styled-components";

const MenuText = ({ onClick }) => {
  return (
    <Text onClick={onClick} className="header-text">
      Ahyoung's Portfolio
    </Text>
  );
};

export default MenuText;

const Text = styled.div`
  cursor: pointer;
  font-weight: bold;
  font-size: 1.5rem;
`;

import React from "react";

import styled, { keyframes } from "styled-components";

const SubMenuText = ({ section, index, onClick }) => {
  return (
    <Text onClick={onClick} style={{ animationDelay: `${index / 20}s` }}>
      {section.name}
    </Text>
  );
};

export default SubMenuText;

const fadeIn = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;

const Text = styled.p`
  font-weight: bold;
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.5rem;
  cursor: pointer;

  animation: ${fadeIn} 2s ease backwards;
`;

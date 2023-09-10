import React from "react";
import colors from "../../../common/colors";
import styled from "styled-components";

const LinearText = ({ children, style = {} }) => {
  return (
    <Span className="linear" style={style}>
      {children}
    </Span>
  );
};

export default LinearText;

const Span = styled.span`
  display: inline-block;
  background: ${colors.COLOR_LINEAR_TEXT};
`;

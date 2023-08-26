import React from "react";
import styled from "styled-components";
import colors from "../../../common/colors";

const DescriptionText = ({ text, descriptions }) => {
  return (
    <>
      <Text>{text}</Text>

      {descriptions && (
        <ul style={{ marginTop: "5px" }}>
          {descriptions.map((desc, idx) => (
            <li style={{ listStyle: "inside" }} key={`${desc}_${idx}`}>
              <Text style={{ display: "inline" }}>{desc}</Text>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default DescriptionText;

const Text = styled.p`
  color: ${colors.COLOR_GRAY_TEXT};
  font-size: 1rem;
  line-height: 1.4rem;
  margin-top: 5px;
`;

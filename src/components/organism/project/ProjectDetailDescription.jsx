import React from "react";

import DetailContainer from "./DetailContainer";
import Highlight from "../../atomic/contents/Highlight";

const dummy = [
  "hello worldhello worldhello world\nhello world",
  "/hello world",
  "hello worldhello world\nhello world",
];

const ProjectDetailDescription = ({ headText }) => {
  return (
    <DetailContainer text={headText}>
      {dummy.map((str, idx) => (
        <span key={`${str}_${idx}`}>
          {str[0] == "/" ? <Highlight>{str.slice(1)}</Highlight> : str}
        </span>
      ))}
    </DetailContainer>
  );
};

export default ProjectDetailDescription;

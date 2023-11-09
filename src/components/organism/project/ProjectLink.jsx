import React from "react";

import DetailContainer from "./DetailContainer";
import LinkText from "../../atomic/contents/LinkText";

const ProjectLink = ({ headText, link }) => {
  if (!link) return;

  return (
    <DetailContainer text={headText}>
      <LinkText link={link} />
    </DetailContainer>
  );
};

export default ProjectLink;

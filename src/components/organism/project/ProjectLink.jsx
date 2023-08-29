import React from "react";

import DetailContainer from "./DetailContainer";
import LinkText from "../../atomic/contents/LinkText";

const ProjectLink = ({ headText, link = "https://github.com/Ahyoung-Kim" }) => {
  return (
    <DetailContainer text={headText}>
      <LinkText link={link} />
    </DetailContainer>
  );
};

export default ProjectLink;

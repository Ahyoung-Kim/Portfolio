import React from "react";

import styled from "styled-components";
import { useMediaQueries } from "../../../layout/MediaQuery";
import { PUBLIC_URL } from "../../../../common/config";

const ProfileImage = () => {
  const { isMobile } = useMediaQueries();

  return (
    <Image
      style={isMobile ? { width: "100%" } : { width: "40%" }}
      src={`${PUBLIC_URL}/img/profile-img.jpg`}
    />
  );
};

export default ProfileImage;

const Image = styled.img`
  object-fit: contain;
  border-radius: 1rem;
`;

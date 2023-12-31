import React from "react";

import styled from "styled-components";
import { useMediaQueries } from "../../../layout/MediaQuery";
import { PUBLIC_URL } from "../../../../common/config";

const ProfileImage = () => {
  const { isMobile, isTablet } = useMediaQueries();

  return (
    <Image
      style={
        isMobile
          ? { width: "60%" }
          : isTablet
          ? { width: "40%" }
          : { width: "30%" }
      }
      src={`${PUBLIC_URL}/img/profile-img.jpg`}
    />
  );
};

export default ProfileImage;

const Image = styled.img`
  object-fit: contain;
  border-radius: 1rem;
  display: inline-block;
`;

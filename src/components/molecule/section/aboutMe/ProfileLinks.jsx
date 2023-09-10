import React from "react";

import styled from "styled-components";

import ProfileLink from "../../../atomic/section/aboutMe/ProfileLink";

const ProfileLinks = () => {
  return (
    <Container>
      <ProfileLink
        link={"https://github.com/Ahyoung-Kim"}
        image="github-icon.png"
        text={"깃허브"}
      />
      <ProfileLink
        link={"https://iridescent-zeal.tistory.com/"}
        text={"기술 블로그"}
        image="tistory-icon.png"
      />
    </Container>
  );
};

export default ProfileLinks;

const Container = styled.div`
  margin: 1rem 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

import React from "react";

import styled from "styled-components";

import NavText from "../../atomic/navigation/NavText";

import NavigationType from "../../../constants/NavigationType";

const NavWrapper = () => {
  return (
    <Container>
      <NavText text={NavigationType.ABOUT_ME} onClick={() => {}} />
      <NavText text={NavigationType.SKILLS} onClick={() => {}} />
      <NavText text={NavigationType.PROJECTS} onClick={() => {}} />
      <NavText text={NavigationType.ARCHIVE} onClick={() => {}} />
      <NavText text={NavigationType.ACTIVITY} onClick={() => {}} />
      <NavText text={NavigationType.CAREER} onClick={() => {}} />
    </Container>
  );
};

export default NavWrapper;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

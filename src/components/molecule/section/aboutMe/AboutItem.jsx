import React from "react";
import styled from "styled-components";
import AboutIcon from "../../../atomic/section/aboutMe/AboutIcon";
import AboutText from "../../../atomic/section/aboutMe/AboutText";
import { useMediaQueries } from "../../../layout/MediaQuery";

const AboutItem = ({ icon, text }) => {
  const { isMobile } = useMediaQueries();

  return (
    <Container style={isMobile ? { width: "100%" } : { width: "50%" }}>
      <AboutIcon icon={icon} />
      <AboutText text={text} />
    </Container>
  );
};

export default AboutItem;

const Container = styled.div`
  display: flex;
  align-items: center;
  //   background-color: orange;
  gap: 1rem;
  padding: 0.5rem 0;
  font-size: 0.8rem;
`;

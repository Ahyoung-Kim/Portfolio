import React from "react";

import styled from "styled-components";
import ImageLogo from "../../atomic/contents/ImageLogo";
import HeadText from "../../atomic/contents/HeadText";
import LinkText from "../../atomic/contents/LinkText";
import DescriptionText from "../../atomic/contents/DescriptionText";
import colors from "../../../common/colors";

import { PC, Tablet, Mobile } from "../../layout/MediaQuery";

const Component = ({
  imageSrc,
  link,
  headText,
  descriptionText,
  descriptions,
  isMobile = false,
}) => {
  return (
    <Container style={isMobile ? { flexDirection: "column" } : {}}>
      <ImageLogo src={imageSrc} width={isMobile ? "30%" : "15%"} />

      <Wrapper style={isMobile ? { marginLeft: "0", width: "100%" } : {}}>
        <HeadText text={headText} />

        <LinkText link={link} />

        <DescriptionText text={descriptionText} descriptions={descriptions} />
      </Wrapper>
    </Container>
  );
};

const ArchiveActivityBox = ({
  imageSrc,
  link,
  headText,
  descriptionText,
  descriptions,
}) => {
  return (
    <>
      <PC>
        <Component
          imageSrc={imageSrc}
          link={link}
          headText={headText}
          descriptionText={descriptionText}
          descriptions={descriptions}
        />
      </PC>

      <Tablet>
        <Component
          imageSrc={imageSrc}
          link={link}
          headText={headText}
          descriptionText={descriptionText}
          descriptions={descriptions}
        />
      </Tablet>

      <Mobile>
        <Component
          imageSrc={imageSrc}
          link={link}
          headText={headText}
          descriptionText={descriptionText}
          descriptions={descriptions}
          isMobile={true}
        />
      </Mobile>
    </>
  );
};

export default ArchiveActivityBox;

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: white;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 5px 5px 10px ${colors.COLOR_BOX_SHADOW};
  margin-bottom: 10px;
`;

const Wrapper = styled.div`
  //   background-color: aqua;
  margin-left: 15px;
`;

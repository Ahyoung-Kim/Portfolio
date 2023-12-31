import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import colors from "../../../../common/colors";
import { useMediaQueries } from "../../../layout/MediaQuery";
import TextList from "../../common/TextList";

const ArchiveItem = ({ data, index }) => {
  const { isMobile } = useMediaQueries();
  const { label, link, image, text } = data;

  return (
    <Container
      style={
        isMobile
          ? {}
          : index % 2 == 0
          ? {
              flexDirection: "row",
            }
          : {
              flexDirection: "row-reverse",
            }
      }
    >
      <Image src={image} />

      <Wrapper>
        <Label className="bold-text">{label}</Label>

        <LinkDiv>
          <FontAwesomeIcon icon={faLink} />
          <Link href={link} target={"_blank"}>
            {link}
          </Link>
        </LinkDiv>

        <TextList text={text} />
      </Wrapper>
    </Container>
  );
};

export default ArchiveItem;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 5rem;
  //   background-color: orange;
  height: max-content;
`;

const Image = styled.img`
  display: inline-block;
  width: 10%;
  object-fit: contain;
`;

const Wrapper = styled.div`
  //   background-color: white;
  height: max-content;
`;

const Label = styled.p`
  font-size: 1.5rem;
`;

const LinkDiv = styled.div`
  color: ${colors.COLOR_GRAY_TEXT};
  font-size: 0.8rem;
  padding: 0.5rem 0 1rem;
  cursor: pointer;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  margin-left: 0.5rem;
`;

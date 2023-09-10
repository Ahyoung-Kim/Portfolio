import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import colors from "../../../../common/colors";
import { useMediaQueries } from "../../../layout/MediaQuery";

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

        {text && (
          <TextUl>
            {text.map((_text, idx) => (
              <TextLi key={`${_text}_${idx}`}>{_text}</TextLi>
            ))}
          </TextUl>
        )}
      </Wrapper>
    </Container>
  );
};

export default ArchiveItem;

const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  margin-bottom: 5rem;
`;

const Image = styled.img`
  display: inline-block;
  width: 10%;
  height: max-content;
  object-fit: contain;
`;

const Wrapper = styled.div``;

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

const TextUl = styled.ul`
  // background-color: aqua;
  display: inline-block;
  list-style-type: disc;
  padding-inline-start: 2rem;
  height: max-content;

  font-size: 1rem;
  line-height: 1.5rem;
`;

const TextLi = styled.li``;

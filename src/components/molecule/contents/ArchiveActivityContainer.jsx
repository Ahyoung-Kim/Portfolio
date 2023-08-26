import React from "react";

import styled from "styled-components";

import { PC, Tablet, Mobile } from "../../layout/MediaQuery";

const ArchiveActivityContainer = ({
  children,
  justifyContent = "flex-start",
}) => {
  return (
    <Container style={{ justifyContent }}>
      <PC>
        <Inner>{children}</Inner>
      </PC>

      <Tablet>
        <Inner>{children}</Inner>
      </Tablet>

      <Mobile>
        <Inner style={{ width: "100%" }}>{children}</Inner>
      </Mobile>
    </Container>
  );
};

export default ArchiveActivityContainer;

const Container = styled.div`
  width: 100%;
  display: flex;
`;

const Inner = styled.div`
  width: 70%;
`;

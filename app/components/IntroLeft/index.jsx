"use client";
import React from "react";
import styled from "styled-components";
import media from "styled-media-query";

import QuoteButton from "../QuoteButton";

const Container = styled.div`
  align-items: flex-start;
  background-color: #fbfaf6;
  border: 1px solid #ccddc7;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  padding: 30px 0 30px 30px;
  position: relative;
  z-index: 5;

  ${media.greaterThan("374px")`
height: 270px;
padding: 15px;
`}

  ${media.greaterThan("1023px")`
height: 328px;
`}
`;

const Text = styled.div`
  font-size: 18px;
  text-align: left;

  ${media.greaterThan("374px")`
font-size: 16px;
width: 100%;
`}

  ${media.greaterThan("1023px")`
font-size: 18px;
width: 75%;
`}
`;

export default function IntroLeft() {
  return (
    <Container>
      <Text className="green-500-text">
        Join hundreds of businesses who trust us to offer health insurance that
        works the way it should: affordable coverage that puts employees and
        their doctors in the driving seat.
      </Text>
      <QuoteButton />
    </Container>
  );
}

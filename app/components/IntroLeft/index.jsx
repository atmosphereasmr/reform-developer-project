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
    border-top-color: transparent;
    border-right-color: #ccddc7;
  `}

  ${media.greaterThan("1023px")`
    height: 328px;
    border-top-color: #ccddc7;
    border-right-color: transparent;
  `}
`;

const Text = styled.div`
  text-align: left;

  ${media.greaterThan("374px")`
    font-size: var(--body-xs);
    width: 100%;
  `}

  ${media.greaterThan("1023px")`
    font-size: var(--body-s);
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

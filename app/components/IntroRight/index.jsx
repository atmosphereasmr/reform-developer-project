"use client";
import React from "react";
import styled from "styled-components";
import media from "styled-media-query";

import CardCarousel from "../CardCarousel/index.jsx";

const CarouselContainer = styled.div`
  align-items: center;
  background-color: #fbfaf6;
  border: 1px solid #ccddc7;
  display: flex;
  height: 328px;
  justify-content: center;
  overflow: hidden;
  width: 100%;

  ${media.greaterThan("374px")`
    height: 270px;
  `}

  ${media.greaterThan("1023px")`
    height: 328px;
  `}
`;

export default function IntroRight() {
  return (
    <CarouselContainer>
      <CardCarousel />
    </CarouselContainer>
  );
}

"use client"
import React from 'react';
import styled from "styled-components";
import media from "styled-media-query";

import CardCarousel from '../CardCarousel/index.jsx';

const CarouselContainer = styled.div`
width: 100%;
height: 328px;
background-color: #fbfaf6;
border: 1px solid #ccddc7;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;

${media.greaterThan("374px")`
height: 270px;
`}

${media.greaterThan("1023px")`
height: 328px;
`}


`

export default function IntroRight() {

  return (
    <CarouselContainer>
      <CardCarousel />
    </CarouselContainer>
  )
}
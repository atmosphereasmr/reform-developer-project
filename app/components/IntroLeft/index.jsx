"use client"
import React from 'react';
import styled from "styled-components";
import QuoteButton from '../QuoteButton';
import media from "styled-media-query"

const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: flex-start;
flex-flow: column;
padding: 30px 0 30px 30px;
border: 1px solid #CCDDC7;
position: relative;
background-color: #fbfaf6;
z-index: 5;

${media.greaterThan("374px")`
height: 270px;
padding: 15px;
`}

${media.greaterThan("1023px")`
height: 328px;
`}
`

const Text = styled.div`
text-align: left;
font-size: 18px;

${media.greaterThan("374px")`
width: 100%;
font-size: 16px;
`}

${media.greaterThan("1023px")`
width: 75%;
font-size: 18px;
`}
`

export default function IntroLeft() {
  return (
    <Container>
      <Text className="green-500-text"> 
      Join hundreds of businesses who trust us to offer health insurance that works the way it should: affordable coverage that puts employees and their doctors in the driving seat.
      </Text>
      <QuoteButton />
    </Container>
  )
}
"use client"
import React from "react";
import Marquee from "../Marquee";
import styled, { keyframes } from "styled-components";
import media from "styled-media-query";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;

  ${media.greaterThan("376px")`
  height: 250px;
`}

  ${media.greaterThan("1024px")`
  height: 400px;
  `}

  ${media.greaterThan("1440px")`
  height: 250px;
  `}

`;

const vanishShrink = keyframes`
  from {}
  to {
    width: 0;
    height: 0;
    margin: 0 7px 0 7px;
    font-size: 0pt;
  }
`;

const fadeBorder = keyframes`
  from {
    border-color: #ccddc7;
  }
  to {
    border-color: transparent;
  }
`;

const turnGreen = keyframes`
from {
  transform: skewX(0deg);
  color: #153e2a;
}
to {
  transform: skewX(-10deg);
  color: #00b684;
}`;

const innerVanishShrink = keyframes`
  from {}
  to {
    width: 0;
    height: 0;
    top: 0;
    font-size: 0pt;
    transform: translate(50px, 50px);
  }
`;

const StaticHeader = styled.div`
  display: none;
  font-family: "SoehneBuch", sans-serif;
  font-size: 109px;
  line-spacing: -3%;
  line-height: 120%;
  text-align: center;

  ${media.greaterThan("376px")`
display: inline;
`}
`;

const MobileStaticHeader = styled.div`
  font-family: "SoehneBuch", sans-serif;
  font-size: 47px;
  line-spacing: -3%;
  line-height: 120%;
  display: inline;
  text-align: center;

  ${media.greaterThan("376px")`
display: none;
`}
`;

const HeaderWrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

//15px margin for tablet

const Vanish = styled.span`
  display: inline-block;
  height: 90px;
  width: 307px;
  animation: ${vanishShrink} 3s cubic-bezier(0.95, 0, 0.05, 1) forwards,
    ${fadeBorder} 1s ease forwards;
  animation-delay: 1s, 3.5s;
  vertical-align: baseline;
  border: 2px solid #ccddc7;
  border-radius: 15px;
  z-index: 2;
  overflow: hidden;
  background-color: white;

  ${media.greaterThan("376px")`
  width: 327px;
  margin: 0 15px;
`}

  ${media.greaterThan("1024px")`
    width: 307px;
    margin: 0 15px;
  `}

  ${media.greaterThan("1440px")`
    width: 662px;
    margin: 0 30px;
  `}
`;

const InnerVanish = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  top: 30px;
  height: 30px;
  align-items: center;
  width: 100%;
  color: #d87906;
  animation: ${innerVanishShrink} 3s cubic-bezier(0.95, 0, 0.05, 1) forwards;
  animation-delay: 1s;
`;

// Simple text span
const Text = styled.span`
  font-family: "SoehneBuch", sans-serif;
  position: relative;
  font-size: 109px;
  line-height: 1.1;
  display: none;

  ${media.greaterThan("376px")`
display: inline-block;
`}
`;

const TurnGreen = styled.span`
  animation: ${turnGreen} 0.5s 3.75s forwards;
`;

export default function IntroHeader() {
  return (
    <HeaderContainer className="green-500-text">
      <StaticHeader>Health insurance that <TurnGreen>doesn't</TurnGreen></StaticHeader>
      <MobileStaticHeader>
        Health insurance that <TurnGreen>doesn't get</TurnGreen>
      </MobileStaticHeader>
      <HeaderWrapper>
        <TurnGreen>
          <Text>get in</Text>
        </TurnGreen>
        <Vanish>
          <InnerVanish>
            <Marquee />
          </InnerVanish>
        </Vanish>
        <TurnGreen>
          <Text>the way.</Text>
        </TurnGreen>
      </HeaderWrapper>
      <MobileStaticHeader>
        <TurnGreen>in the way.</TurnGreen>
      </MobileStaticHeader>
    </HeaderContainer>
  );
}

"use client";
import React from "react";
import Marquee from "../Marquee";
import styled, { keyframes } from "styled-components";
import media from "styled-media-query";

const HeaderContainer = styled.div`
  align-items: center;
  display: flex;
  flex-flow: column;
  justify-content: center;

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
  line-height: 120%;
  letter-spacing: -3%;
  text-align: center;

  ${media.greaterThan("376px")`
display: inline;
`}
`;

const MobileStaticHeader = styled.div`
  display: inline;
  font-family: "SoehneBuch", sans-serif;
  font-size: 47px;
  letter-spacing: -3%;
  line-height: 120%;
  text-align: center;

  ${media.greaterThan("376px")`
display: none;
`}
`;

const HeaderWrapper = styled.div`
  align-items: center;
  display: inline-flex;
  justify-content: center;
`;

const Vanish = styled.span`
  animation: ${vanishShrink} 3s cubic-bezier(0.95, 0, 0.05, 1) forwards,
    ${fadeBorder} 1s ease forwards;
  animation-delay: 1s, 3.5s;
  background-color: white;
  border: 2px solid #ccddc7;
  border-radius: 15px;
  display: inline-block;
  height: 90px;
  overflow: hidden;
  vertical-align: baseline;
  width: 307px;
  z-index: 2;

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
  align-items: center;
  animation: ${innerVanishShrink} 3s cubic-bezier(0.95, 0, 0.05, 1) forwards;
  animation-delay: 1s;
  color: #d87906;
  display: flex;
  height: 30px;
  justify-content: center;
  position: relative;
  top: 30px;
  width: 100%;
`;

const Text = styled.span`
  display: none;
  font-family: "SoehneBuch", sans-serif;
  font-size: 109px;
  line-height: 1.1;
  position: relative;

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
      <StaticHeader>
        Health insurance that <TurnGreen>doesn't</TurnGreen>
      </StaticHeader>
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

"use client";
import React from "react";
import styled, { keyframes } from "styled-components";
import Illo from "../../assets/icons/Illo.jsx";

const scrollLeft = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-10%);
  }
`;

const MarqueeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 1440px;
  text-transform: uppercase;
  animation: ${scrollLeft} 2s ease-out forwards;
`;

const MarqueeItem = styled.span`
  font-size: 12pt;
  position: relative;
  z-index: 1;
  margin: 0 30px;
`;

export default function Marquee() {
  return (
    <MarqueeContainer className="orange-text">
      <MarqueeItem>unpredictable rate increases</MarqueeItem>
      <Illo />
      <MarqueeItem>lack of transparency</MarqueeItem>
      <Illo />
      <MarqueeItem>implementation headache</MarqueeItem>
      <Illo />
      <MarqueeItem>claim denails</MarqueeItem>
      <Illo />
      <MarqueeItem>frustrated users</MarqueeItem>
      <Illo />
    </MarqueeContainer>
  );
}

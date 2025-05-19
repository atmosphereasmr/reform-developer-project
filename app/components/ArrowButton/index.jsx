"use client";
import React, { useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";

import RightArrow from "../../assets/icons/RightArrow.jsx";

const ArrowCircle = styled.div`
  width: ${({ diameter }) => diameter};
  height: ${({ diameter }) => diameter};
  border-radius: 100%;
  border: 1px solid #30715d;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding-right: 5px;
  position: relative;
  z-index: 1;
`;

const WhiteDot = styled.div`
  width: 50%;
  height: 50%;
  border-radius: 100%;
  position: absolute;
  bottom: 60%;
  right: 60%;
  background-color: #fbfaf6;
  pointer-events: none;
`;

export default function ArrowButton({
  circleRef,
  arrowRef,
  diameter,
  arrowSize,
  style,
  arrowStyle,
  onClick,
}) {
  if (!circleRef && !arrowRef) {
    circleRef = useRef(null);
    arrowRef = useRef(null);
  }

  const animateArrow = async () => {
    const tl = gsap.timeline();

    if (onClick) {
      tl.call(await onClick());
    }

    tl.to(arrowRef.current, {
      x: 50,
      duration: 0.25,
      ease: "power2.inOut",
    });

    tl.set(arrowRef.current, { x: -50 });

    tl.to(arrowRef.current, {
      x: 0,
      duration: 0.25,
      ease: "power2.inOut",
    });
  };

  return (
    <ArrowCircle
      diameter={diameter}
      style={style}
      ref={circleRef}
      onClick={animateArrow}
    >
      <RightArrow size={arrowSize} style={arrowStyle} ref={arrowRef} />
      <WhiteDot />
    </ArrowCircle>
  );
}

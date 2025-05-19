"use client";
import React, { useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";

import RightArrow from "../../assets/icons/RightArrow.jsx";

const ArrowCircle = styled.div`
  align-items: center;
  border: 1px solid #30715d;
  border-radius: 100%;
  cursor: pointer;
  display: flex;
  height: ${({ diameter }) => diameter};
  justify-content: center;
  padding-right: 5px;
  position: relative;
  width: ${({ diameter }) => diameter};
  z-index: 1;
`;

const WhiteDot = styled.div`
  background-color: #fbfaf6;
  border-radius: 100%;
  bottom: 60%;
  height: 50%;
  pointer-events: none;
  position: absolute;
  right: 60%;
  width: 50%;
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

"use client";
import React, { useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";

import ArrowButton from "../ArrowButton";

const Container = styled.div`
  align-items: center;
  display: flex;
  height: 50px;
  justify-content: flex-start;
  position: relative;
  transition: 3s;
  width: 100%;
`;

const Button = styled.div`
  align-items: center;
  border: 1px solid #30715d;
  border-radius: 25px;
  cursor: pointer;
  display: flex;
  height: 100%;
  justify-content: center;
  padding: 0 15px;
  position: relative;
  width: 230px;
  z-index: 2;
`;

export default function QuoteButton() {
  const buttonRef = useRef(null);
  const circleRef = useRef(null);
  const arrowRef = useRef(null);

  const isToggled = useRef(false);

  const swapButtons = () => {
    const toggle = !isToggled.current;
    isToggled.current = toggle;

    gsap.to(buttonRef.current, {
      x: toggle ? 60 : 0,
      color: toggle ? "#00b684" : "#153e2a",
      borderColor: toggle ? "#00b684" : "#153e2a",
      duration: 0.6,
      ease: "power2.inOut",
    });

    gsap.to(circleRef.current, {
      x: toggle ? -240 : 0,
      color: toggle ? "#00b684" : "#153e2a",
      borderColor: toggle ? "#00b684" : "#153e2a",
      duration: 0.6,
      ease: "power2.inOut",
    });

    gsap.to(arrowRef.current, {
      stroke: toggle ? "#00b684" : "#153e2a",
      duration: 0.6,
      ease: "power2.inOut",
    });
  };

  return (
    <Container>
      <Button onClick={swapButtons} ref={buttonRef}>
        Get a Custom Quote Today
      </Button>
      <ArrowButton
        circleRef={circleRef}
        arrowSize="14px"
        arrowRef={arrowRef}
        diameter="50px"
        style={{ left: "10px" }}
      />
    </Container>
  );
}

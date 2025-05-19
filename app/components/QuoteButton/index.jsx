"use client"
import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import ArrowButton from "../ArrowButton";
import { gsap } from "gsap";

const Container = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
width: 100%;
transition: 3s;
height: 50px;
position: relative;
`;

const Button = styled.div`
width: 230px;
height: 100%;
border-radius: 25px;
border: 1px solid #30715d;
display: flex;
justify-content: center;
align-items: center;
padding: 0 15px;
position: relative;
cursor: pointer;
z-index: 2
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
      ease: "power2.inOut"
    });
  
    gsap.to(circleRef.current, {
      x: toggle ? -240 : 0,
      color: toggle ? "#00b684" : "#153e2a",
      borderColor: toggle ? "#00b684" : "#153e2a",
      duration: 0.6,
      ease: "power2.inOut"
    });

    gsap.to(arrowRef.current, {
      stroke: toggle ? "#00b684" : "#153e2a",
      duration: 0.6,
      ease: "power2.inOut"
    })
  };  

  return (
    <Container>
      <Button onClick={swapButtons} ref={buttonRef}>Get a Custom Quote Today</Button>
      <ArrowButton circleRef={circleRef} arrowSize="14px" arrowRef={arrowRef} diameter="50px" style={{left: "10px"}} />
    </Container>
  );
}

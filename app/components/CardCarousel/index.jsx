import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import media from "styled-media-query";

import ArrowButton from "../ArrowButton";
import Card from "../Card"

const initDummyData = [
  {
    name: "Sarah Foxx",
    position: "Owner, CEO",
    phone: "15-26669-890",
    company: "Sunnyside Up Day Care",
    image: "/images/sarah.png",
  },
  {
    name: "Julianna alvarez",
    position: "Founder",
    phone: "72-36924-486",
    company: "Spaw Retreat Dog Grooming",
    image: "/images/julianna.png",
  },
  {
    name: "Jeffrey R. bott",
    position: "Leading Partner",
    phone: "86-97432-123",
    company: "Bott and Sons Accounting",
    image: "/images/jeffrey.png",
  },
  {
    name: "Oscar Wilder",
    position: "CEO, Engineer",
    phone: "64-16497-726",
    company: "Endurance.AI",
    image: "/images/oscar.png",
  },
];

const CarouselWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  overflow: hidden;
  width: 100%;

  ${media.greaterThan("374px")`
    width: 343px;
  `}

  ${media.greaterThan("1023px")`
    width: 480px;
  `}

  ${media.greaterThan("1439px")`
    width: auto;
  `}
`;

const CarouselTrack = styled.div`
  display: flex;
`;

const ArrowContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export default function CardCarousel() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [trackOffset, setTrackOffset] = useState(0);
  const [dummyData, setDummyData] = useState(initDummyData);
  const [widthDeviceAdjustment, setWidthDeviceAdjustment] = useState(0);
  const cardRefs = useRef([]);
  const trackRef = useRef();

  useLayoutEffect(() => {
    cardRefs.current.forEach((card, index) => {
      if (card) {
        gsap.set(card, {
          scale: index === 1 ? 1 : 0.8,
        });
      }
    });
  }, []);

  // Determine width of screen (needed to align carousel for desktop, mobile or tablet)

  useEffect(() => {
    if (window.innerWidth <= 377) {
      setWidthDeviceAdjustment(34);
    } else if (window.innerWidth >= 378 && window.innerWidth <= 1024) {
      setWidthDeviceAdjustment(30);
    } else {
      setWidthDeviceAdjustment(40);
    }
  }, [activeIndex]);

  const animateToCard = (newIndex, offset) => {
    let currentCard = cardRefs.current[activeIndex];
    let nextCard = cardRefs.current[newIndex];
    const track = trackRef.current;

    const movingRight =
      newIndex === (activeIndex % 4) + 1 ||
      (activeIndex === 4 && newIndex === 1);
    const shiftPercentage = movingRight ? 400 : -400;

    // Move the first or last card in the deck depending on if we're moving right or left

    const shuffleCard =
      cardRefs.current[movingRight ? activeIndex - 1 : (activeIndex + 2) % 4];
    let shuffleCardPos = 0;

    if (movingRight) {
      shuffleCardPos = 0;
    }

    // Account for the growth / shrink for the first card shuffling to the beginning (left) or end (right) of the deck
    if (newIndex == 4) {
      nextCard = cardRefs.current[shuffleCardPos];
    }
    if (activeIndex == 4) {
      currentCard = cardRefs.current[shuffleCardPos];
    }

    const tl = gsap.timeline({
      onComplete: () => {
        setActiveIndex(newIndex);
      },
    });

    const tl2 = gsap.timeline();

    tl.to(currentCard, {
      scale: 0.8,
      duration: 0.5,
      ease: "sine.inOut",
    });

    tl.to(
      track,
      {
        duration: 2,
        xPercent: offset,
        ease: "power2.inOut",
      },
      "-=0.5"
    );

    // Shift the shuffle card left or right based on its current position
    const currentX = gsap.getProperty(shuffleCard, "xPercent");

    tl2.to(
      shuffleCard,
      {
        xPercent: currentX + shiftPercentage,
        duration: 0,
        ease: "power2.inOut",
      },
      "+=0.5"
    );

    tl.set(
      nextCard,
      {
        scale: 0.8,
      },
      "-=0.5"
    );

    tl.to(
      nextCard,
      {
        scale: 1,
        duration: 0.5,
        ease: "sine.inOut",
      },
      "-=0.5"
    );

    // Reset when we land back in our initial position (card at index 1 is centered)
    if (
      (movingRight && activeIndex == 4) ||
      (!movingRight && activeIndex == 2)
    ) {
      setTrackOffset(0);

      tl.to(track, {
        duration: 0,
        xPercent: 0,
        ease: "power2.inOut",
      });

      for (var i = 0; i < dummyData.length; i++) {
        tl.to(cardRefs.current[i], {
          duration: 0,
          xPercent: 0,
          ease: "power2.inOut",
        });
      }
    }
  };

  const nextCard = () => {
    let newIndex = activeIndex + 1;
    if (newIndex > dummyData.length) {
      newIndex = 1;
    }

    const newOffset = trackOffset - widthDeviceAdjustment;
    setTrackOffset(newOffset);
    animateToCard(newIndex, newOffset);
  };

  const prevCard = () => {
    let newIndex = activeIndex - 1;
    if (newIndex < 1) {
      newIndex = dummyData.length;
    }

    const newOffset = trackOffset + widthDeviceAdjustment;
    setTrackOffset(newOffset);
    animateToCard(newIndex, newOffset);
  };

  return (
    <div>
      <CarouselWrapper style={{ position: "relative" }}>
        <CarouselTrack ref={trackRef} style={{ display: "flex" }}>
          {dummyData.map((data, index) => (
            <Card data={data} index={index} key={index} cardRefs={cardRefs} />
          ))}
        </CarouselTrack>
      </CarouselWrapper>
      <ArrowContainer>
        <ArrowButton
          onClick={prevCard}
          style={{ marginRight: "10px" }}
          diameter="32px"
          arrowSize="10px"
          arrowStyle={{ transform: "scaleX(-1)" }}
        />
        <ArrowButton onClick={nextCard} diameter="32px" arrowSize="10px" />
      </ArrowContainer>
    </div>
  );
}

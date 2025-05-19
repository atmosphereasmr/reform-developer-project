import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import styled from "styled-components";
import { Row } from "react-bootstrap";
import { gsap } from "gsap";
import media from "styled-media-query";

import ArrowButton from "../ArrowButton";

import Dropdown from "../../assets/icons/Dropdown.jsx";
import DetailBars from "../../assets/icons/DetailBars";
import BarCode from "../../assets/icons/BarCode";

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
    image: "/images/jeffrey.png",
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

const CardContainer = styled.div`
  position: relative;

  ${media.greaterThan("374px")`
  height: 175px;
`}

  ${media.greaterThan("1023px")`
  height: 200px;
  `}

  ${media.greaterThan("1439px")`
  height: 244px;
  `}

height: 200px;

  ${media.greaterThan("374px")`
flex: 0 0 33%;
right: 0%;
`}

  ${media.greaterThan("1023px")`
  flex: 0 0 30%;
  right: -5%;
  `}

  ${media.greaterThan("1439px")`
  flex: 0 0 40%;
  right: 10%;
  `}
`;

const Card = styled.div`
  align-items: center;
  background-color: #f0f0f0;
  border: 1px solid #6e9e8f;
  border-radius: 15px;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

const CardTopContainer = styled.div`
  align-items: flex-start;
  display: flex;
  height: auto;
  justify-content: space-between;
  width: 100%;

  ${media.greaterThan("374px")`
  padding: 15px 15px 0 15px
  `}

  ${media.greaterThan("1023px")`
padding: 15px 15px 0 15px
`}

  ${media.greaterThan("1439px")`
padding: 30px 30px 0 30px
`}
`;

const StyledImage = styled.img`
  border-radius: 5px;
  object-fit: cover;

  ${media.greaterThan("374px")`
  width: 60px;
  height: 60px;
  `}

  ${media.greaterThan("1439px")`
  width: 80px;
  height: 80px;
  `}
`;

const BottomContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-flow: column;
  height: 75px;
  justify-content: flex-end;
  width: 100%;

  ${media.greaterThan("374px")`
  padding: 15px 15px 0 15px
  `}

  ${media.greaterThan("1023px")`
padding: 15px 15px 0 15px
`}

  ${media.greaterThan("1439px")`
padding: 30px 30px 0 30px
`}
`;

const CompanyNameContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;

  ${media.greaterThan("374px")`
  font-size: 12px;
`}

  ${media.greaterThan("1023px")`
  font-size: 16px;
  `}

  ${media.greaterThan("1439px")`
  font-size: 20px;
  `}
`;

const Text = styled.div`
  font-size: 20px;

  ${media.greaterThan("374px")`
  font-size: 10px;
  `}

  ${media.greaterThan("1023px")`
    font-size: 14px;
    `}
  
    ${media.greaterThan("1439px")`
    font-size: 16px;
    `}
`;

const DetailBarsContainer = styled.div`
  ${media.greaterThan("374px")`
width: 120px;
`}

  ${media.greaterThan("1023px")`
width: 207px;
`}
`;

const SubText = styled.div`
  font-size: 15px;
  opacity: 40%;

  ${media.greaterThan("374px")`
font-size: 10px
  `}

  ${media.greaterThan("1023px")`
    font-size: 12px;
    `}
  
    ${media.greaterThan("1439px")`
    font-size: 14px;
    `}
`;

const TopRightContainer = styled.div`
  align-items: flex-end;
  display: flex;
  flex-flow: column;
  font-family: "SoehneBuch", sans-serif;
  justify-content: flex-end;
  text-transform: uppercase;
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
      setWidthDeviceAdjustment(33);
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
            <CardContainer>
              <Card
                style={{ width: "100%" }}
                key={index}
                ref={(e) => (cardRefs.current[index] = e)}
              >
                <Row style={{ width: "100%", height: "100%" }}>
                  <CardTopContainer>
                    <StyledImage src={data.image} alt="Jane" />
                    <TopRightContainer>
                      <Text className="green-300-text">{data.name}</Text>
                      <SubText className="green-300-text">
                        {data.position}
                      </SubText>
                      <SubText
                        className="green-300-text"
                        style={{ marginTop: "7px" }}
                      >
                        {data.phone}
                      </SubText>
                    </TopRightContainer>
                  </CardTopContainer>
                  <BottomContainer>
                    <Text className="green-300-text">
                      <CompanyNameContainer>
                        <div style={{ marginRight: "5px" }}>
                          <Dropdown />
                        </div>
                        {data.company}
                      </CompanyNameContainer>
                    </Text>
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <DetailBarsContainer>
                        <DetailBars />
                      </DetailBarsContainer>
                      <div>
                        <BarCode />
                      </div>
                    </div>
                  </BottomContainer>
                </Row>
              </Card>
            </CardContainer>
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

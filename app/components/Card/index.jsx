import React from "react";
import styled from "styled-components";
import { Row } from "react-bootstrap";
import media from "styled-media-query";

import Dropdown from "../../assets/icons/Dropdown.jsx";
import DetailBars from "../../assets/icons/DetailBars";
import BarCode from "../../assets/icons/BarCode";

const CardContainer = styled.div`
  height: 200px;
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

  ${media.greaterThan("374px")`
    flex: 0 0 34%;
    right: 1%;
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

const CardBox = styled.div`
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
    font-size: var(--body-xs);
  `}

  ${media.greaterThan("1023px")`
    font-size: var(--body-s);
  `}

  ${media.greaterThan("1439px")`
    font-size: var(--body-reg);
  `}
`;

const Text = styled.div`
  font-size: var(--body-reg);

  ${media.greaterThan("374px")`
    font-size: var(--body-xxs);
  `}

  ${media.greaterThan("1023px")`
    font-size: var(--body-xs);
  `}
  
  ${media.greaterThan("1439px")`
    font-size: var(--body-s);
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
font-size: var(--body-s);
  opacity: 40%;

  ${media.greaterThan("374px")`
    font-size: var(--body-xxs);
  `}

  ${media.greaterThan("1023px")`
    font-size: var(--body-xxs);
  `}
  
  ${media.greaterThan("1439px")`
    font-size: var(--body-xs);
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


export default function Card({data, index, cardRefs}) {

  return (
    <CardContainer key={index}>
    <CardBox
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
    </CardBox>
  </CardContainer>
  )
}
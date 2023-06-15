import * as React from "react"
import {StaticImage} from "gatsby-plugin-image";
import SectionContainer from "../components/sectionContainer";
import styled from "@emotion/styled"
import Pill from "../components/pill";
import {navigate} from "gatsby";

const Title = styled.h1`
  margin-top:3rem;

  font-size: 4rem;
  @media only screen
  and (min-device-width: 375px)
  and (max-device-width: 812px)
  and (-webkit-min-device-pixel-ratio: 3) {
    font-size: 3rem;
  }

`

const IntroContainer = styled.div`
  height: 70vh;
  display: flex;
  margin-top: 2.5rem;
  margin-bottom: -7rem;

  @media only screen
  and (min-device-width: 375px)
  and (max-device-width: 812px)
  and (-webkit-min-device-pixel-ratio: 3) {
    flex-direction: column;
    min-height: 100vh;
    margin-bottom: -12rem;
  }

  @media only screen
  and (min-device-width: 375px)
  and (max-device-width: 812px)
  and (-webkit-min-device-pixel-ratio: 3)
  and (orientation: landscape) {
    margin-bottom: 5rem;
  }
`

const IntroContainerLeft = styled.div`
  width: 50%;

  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin-left: 5rem;

  @media only screen
  and (min-device-width: 375px)
  and (max-device-width: 812px)
  and (-webkit-min-device-pixel-ratio: 3) {
    order:2;
    align-items: center;
    align-content: center;
    width: 50%;
    margin-left: 6rem;

  }
  @media only screen
  and (min-device-width: 375px)
  and (max-device-width: 812px)
  and (-webkit-min-device-pixel-ratio: 3)
  and (orientation: landscape) {
    width: 75%;
  }
`

const IntroContainerRight = styled.div`
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 50%;

  @media only screen
  and (min-device-width: 375px)
  and (max-device-width: 812px)
  and (-webkit-min-device-pixel-ratio: 3) {
    order: 1;
    display: none;
    width: 0;
  }
`

const Text = styled.p`
  font-size: 1.3rem;
  margin-right: 4rem;
  margin-bottom: 0.8rem;
  @media only screen
  and (min-device-width: 375px)
  and (max-device-width: 812px)
  and (-webkit-min-device-pixel-ratio: 3) {
    margin-right: 0!important;


  }
`
const List = styled.li`
  margin-top: 0.3rem;
  font-size: 1.2rem;

  `

const PillWrapper = styled.div`
  display: flex;
  margin-top: 3rem;
  margin-bottom: 3rem;

  .cardsPill {
    color: white;
    text-decoration: none;
    align-content: center;
    align-items: center;
  }

  .pills{

    margin-left: 1rem;
    background-color: white;
    border: 2px solid #dd356e;
    color: #dd356e;

    &:hover {
      color: white;
      background: #dd356e;
      border: 2px solid white;
    }
  }
`


const PricingTitleSection = () => (
    <SectionContainer id="intro" height={80}>
        <IntroContainer>
            <IntroContainerLeft>
                <Title >Unsere Preise</Title>
                <Text>In unseren Preisen sind neben den Geräten folgende Services inklusive:</Text>
                <List>Bereitstellung nach Kundenwunsch</List>
                <List>Lieferung per Post in die ganze Schweiz</List>
                <List>Support bei Hard- und Softwareproblemen</List>
                <List>Gerätemanagement</List>
                <List>Updatemanagement</List>
                <List>Ersatzgerät bei Defekt oder Beschädigung</List>
                <PillWrapper>
                    <Pill action={() => navigate("/contact")} className={"pills"}>Jetzt bestellen</Pill>
                </PillWrapper>
            </IntroContainerLeft>
            <IntroContainerRight>
                <StaticImage
                    placeholder= 'none'
                    src="../images/circle.png"
                    loading="eager"
                    width={750}
                    quality={100}
                    formats={["auto", "webp", "avif"]}
                    alt="Laptop with arrows"
                    class = "desktopImage"
                />
            </IntroContainerRight>
        </IntroContainer>
    </SectionContainer>
)

export default PricingTitleSection
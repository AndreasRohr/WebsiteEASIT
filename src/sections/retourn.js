import * as React from "react"
import {StaticImage} from "gatsby-plugin-image";
import SectionContainer from "../components/sectionContainer";
import styled from "@emotion/styled"

import PillLink from "../components/pillLink";



const ContentContainerRight = styled.div`
  display: flex;
  margin-left: 10rem;
  margin-bottom: 4rem;

  @media only screen
  and (min-device-width: 375px)
  and (max-device-width: 812px)
  and (-webkit-min-device-pixel-ratio: 3) {
    width: 90%;
    margin: 0;
    margin-left: 5%;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  }
`

const ContentContainerLeft = styled.div`
  display: flex;
  margin-right: 10rem;
  margin-bottom: 4rem;
  margin-left: 3rem;

  @media only screen
  and (min-device-width: 375px)
  and (max-device-width: 812px)
  and (-webkit-min-device-pixel-ratio: 3) {
    width: 90%;
    margin: 0;
    margin-left: 5%;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  }
`

const LeftContainerImage = styled.div`
  width: 50%;
  display: flex;

  .desktopImage{
    margin-left: auto;
    margin-right:auto;
  }

  @media only screen
  and (min-device-width: 375px)
  and (max-device-width: 812px)
  and (-webkit-min-device-pixel-ratio: 3) {
    width: 50%;
  }
`


const RightContainerText = styled.div`
  width: 50%;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  p {
    margin-right: 2rem;
  }

  @media only screen
  and (min-device-width: 375px)
  and (max-device-width: 812px)
  and (-webkit-min-device-pixel-ratio: 3) {
    width: 90%;
    margin: 0;
    order: 2;
    text-align: center;
    justify-content: center;
    align-items: center;
    p {
      margin: 0;
      margin-bottom: 1rem;
      margin-top: 1rem;
    }
  }

`

const LeftContainerText = styled.div`

  width: 50%;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin-left: 2rem;

  @media only screen
  and (min-device-width: 375px)
  and (max-device-width: 812px)
  and (-webkit-min-device-pixel-ratio: 3) {
    order: 2;
    width: 100%;
    margin: 0;
    text-align: center;
    justify-content: center;
    align-items: center;
    p {
      margin: 0;
      margin-bottom: 1rem;
      margin-top: 1rem;
    }
  }

`

const RightContainerImage = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  .desktopImage{
    margin-left: auto;
    margin-right:auto;
  }

  @media only screen
  and (min-device-width: 375px)
  and (max-device-width: 812px)
  and (-webkit-min-device-pixel-ratio: 3) {
    width: 50%;
  }

`

const PillWrapper = styled.div`
  display: flex;
  margin-top: 3rem;

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

  @media only screen
  and (min-device-width: 375px)
  and (max-device-width: 812px)
  and (-webkit-min-device-pixel-ratio: 3) {
    margin: 0;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
`

const Title = styled.h1`
margin-bottom: 1rem;
font-size: 2.5rem;

  @media only screen
  and (min-device-width: 375px)
  and (max-device-width: 812px)
  and (-webkit-min-device-pixel-ratio: 3) {
margin: 0;
    font-size: 2rem;
  }
  
`

const PhaseTitle = styled.h1`
margin-bottom: 4rem;
margin-top: 1rem;
font-size: 2.5rem;
text-align: center;

  @media only screen
  and (min-device-width: 375px)
  and (max-device-width: 812px)
  and (-webkit-min-device-pixel-ratio: 3) {
margin: 0;
  }
`




const Retourn = () => (
    <SectionContainer id="intro" color={"#F3F4F7"} height={80}>
        <div id="section4">
            <PhaseTitle>EASIT Rücknahme</PhaseTitle>
            <ContentContainerLeft>
                <LeftContainerText>
                    <Title>Gerätetausch</Title>
                    <p>Du möchtest nach der Laufzeit ein anderes Gerät? Kein Problem! Wir kümmern uns um einen reibungslosen Wechsel auf ein anderes Modell, so dass du ohne Unterbruch weiterarbeiten kannst. </p>
                    <PillWrapper>
                        <PillLink to="/support" className="cardsPill">Support kontaktieren</PillLink>
                    </PillWrapper>
                </LeftContainerText>
                <RightContainerImage>
                    <StaticImage
                        placeholder= 'none'
                        src="../images/device-exchange.png"
                        loading="eager"
                        width={450}
                        quality={100}
                        formats={["auto", "webp", "avif"]}
                        alt="Laptop with arrows"
                        class = "hiw-Image"
                        objectFit="contain"
                    />
                </RightContainerImage>
            </ContentContainerLeft>
            <ContentContainerRight>
                <LeftContainerImage>
                    <StaticImage
                        placeholder= 'none'
                        src="../images/device-return.png"
                        loading="eager"
                        width={450}
                        quality={100}
                        formats={["auto", "webp", "avif"]}
                        alt="Laptop with arrows"
                        class = "hiw-Image"
                        objectFit="contain"
                    />
                </LeftContainerImage>
                <RightContainerText>
                    <Title>Geräterücknahme</Title>
                    <p>Du möchtest nach der Laufzeit dein Gerät zurückgeben? Wir melden uns frühzeitig, um eine Rückgabe bei uns in Glattbrugg zu vereinbaren oder dir eine Rücksendekiste zuzusenden. </p>
                    <PillWrapper>
                        <PillLink to="/support" className="cardsPill">Support kontaktieren</PillLink>
                    </PillWrapper>
                </RightContainerText>
            </ContentContainerRight>
            <ContentContainerLeft>
                <LeftContainerText>
                    <Title>Gerätekauf</Title>
                    <p>Hast du Interesse dein Gerät nach Ende der Laufzeit zu kaufen? Gerne prüfen wir ob es bei deinem Gerät möglich ist. </p>
                    <PillWrapper>
                        <PillLink to="/contact" className="cardsPill">Kontakt aufnehmen</PillLink>
                    </PillWrapper>
                </LeftContainerText>
                <RightContainerImage>
                    <StaticImage
                        placeholder= 'none'
                        src="../images/device-purchase.png"
                        loading="eager"
                        width={450}
                        quality={100}
                        formats={["auto", "webp", "avif"]}
                        alt="Laptop with arrows"
                        class = "hiw-Image"
                        objectFit="contain"
                    />
                </RightContainerImage>
            </ContentContainerLeft>
        </div>
    </SectionContainer>
)

export default Retourn








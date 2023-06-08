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
  width: 30%;
  margin-left: 20%;
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






const Starting = () => (
    <SectionContainer id="intro" height={80}>
        <div id="section3">
            <PhaseTitle>EASIT im Alltag</PhaseTitle>
            <ContentContainerRight>
                <LeftContainerImage>
                    <StaticImage
                        placeholder= 'none'
                        src="../images/support-service.png"
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
                    <Title>Support</Title>
                    <p>Via der EASIT Supportplattform erreichst du unser Support-Team per Mail, Chat und Telefon. Wenn du eine Frage oder ein Problem mit deinen Geräten hast, stehen wir dir gerne zur Verfügung. </p>
                    <PillWrapper>
                        <PillLink to="https://support.teqly.app/#login" className="cardsPill">Zur Supportplattform</PillLink>
                    </PillWrapper>
                </RightContainerText>
            </ContentContainerRight>
            <ContentContainerLeft>
                <LeftContainerText>
                    <Title>Wartung</Title>
                    <p>Von Zeit zu Zeit meldet sich unser Support-Team bei dir und vereinbart einen Termin für eine Wartung der Geräte, damit diese immer in einem top Zustand sind. </p>
                </LeftContainerText>
                <RightContainerImage>
                    <StaticImage
                        placeholder= 'none'
                        src="../images/maintenance.png"
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
                        src="../images/device-defect.png"
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
                    <Title>Defekt</Title>
                    <p>Kaffee über die Tastatur geleert, Tablet runtergefallen oder der Bildschirm bleibt schwarz? Kein Problem, einfach dem Support melden und wir organisieren sofort ein Ersatzgerät, dass so schnell wie möglich geliefert wird. </p>
                    <PillWrapper>
                        <PillLink to="/support" className="cardsPill">Support kontaktieren</PillLink>
                    </PillWrapper>
                </RightContainerText>
            </ContentContainerRight>
        </div>
    </SectionContainer>
)

export default Starting








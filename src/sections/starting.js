import * as React from "react"
import {StaticImage} from "gatsby-plugin-image";
import SectionContainer from "../components/sectionContainer";
import styled from "@emotion/styled"

import PillLink from "../components/pillLink";


const ContentContainerRight = styled.div`
display: flex;
margin-left: 10rem;
margin-bottom: 4rem;
`

const ContentContainerLeft = styled.div`
display: flex;
margin-right: 10rem;
margin-bottom: 4rem;
margin-left: 3rem;
`

const LeftContainerImage = styled.div`
width: 50%;
display: flex;

.desktopImage{
margin-left: auto;
margin-right:auto;
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

`

const LeftContainerText = styled.div`

width: 50%;
justify-content: center;
display: flex;
flex-wrap: wrap;
flex-direction: column;
margin-left: 2rem;

`

const RightContainerImage = styled.div`
width: 50%;
display: flex;

.desktopImage{
margin-left: auto;
margin-right:auto;
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
`

const Title = styled.h1`
margin-bottom: 1rem;
font-size: 2.5rem;
`

const PhaseTitle = styled.h1`
margin-bottom: 4rem;
margin-top: 1rem;
font-size: 2.5rem;
text-align: center;
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
                        class = "desktopImage"
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
                        class = "desktopImage"
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
                        class = "desktopImage"
                        objectFit="contain"
                    />
                </LeftContainerImage>
                <RightContainerText>
                    <Title>Defekt</Title>
                    <p>Kaffee über die Tastatur geleert, Tablet runtergefallen oder der Bildschirm bleibt schwarz? Kein Problem, einfach dem Support melden und wir organisieren sofort ein Ersatzgerät, dass so schnell wie möglich geliefert wird. </p>
                    <PillWrapper>
                        <PillLink to="/contact" className="cardsPill">Kontakt aufnehmen</PillLink>
                    </PillWrapper>
                </RightContainerText>
            </ContentContainerRight>
        </div>
    </SectionContainer>
)

export default Starting








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






const Retourn = () => (
    <SectionContainer id="intro" color={"#F3F4F7"} height={80}>
        <div id="section4">
            <PhaseTitle>EASIT Rücknahme</PhaseTitle>
            <ContentContainerLeft>
                <LeftContainerText>
                    <Title>Gerätetausch</Title>
                    <p>Du möchtest nach der Laufzeit ein anderes Gerät? Kein Problem! Wir kümmern uns um einen reibungslosen Wechsel auf ein anderes Modell, so dass du ohne Unterbruch weiterarbeiten kannst. </p>
                    <PillWrapper>
                        <PillLink to="/contact" className="cardsPill">Kontakt aufnehmen</PillLink>
                    </PillWrapper>
                </LeftContainerText>
                <RightContainerImage>
                    <StaticImage
                        placeholder= 'none'
                        src="../images/laptop-arrows-5.png"
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
                        src="../images/laptop-arrows-5.png"
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
                    <Title>Geräterücknahme</Title>
                    <p>Du möchtest nach der Laufzeit dein Gerät zurückgeben? Wir melden uns frühzeitig, um eine Rückgabe bei uns in Glattbrugg zu vereinbaren oder dir eine Rücksendekiste zuzusenden. </p>
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
                        src="../images/laptop-arrows-5.png"
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
        </div>
    </SectionContainer>
)

export default Retourn








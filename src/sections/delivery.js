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







const Delivery = () => (
    <SectionContainer id="intro" color={"#F3F4F7"} height={80}>
        <div id="section2">
            <PhaseTitle>EASIT Inbetriebnahme</PhaseTitle>
            <ContentContainerLeft>
                <LeftContainerText>
                    <Title>Vorbereitung</Title>
                    <p>Wir bereiten die Geräte auf und bereiten es für dich vor. Sind die Geräte bei uns an Lager, so sind sie innert 5 Tagen Einsatzbereit. Wenn wir die Geräte beschaffen beträgt die Wartezeit in der Regel zwischen 10 und 30 Tagen. </p>
                </LeftContainerText>
                <RightContainerImage>
                    <StaticImage
                        placeholder= 'none'
                        src="../images/preparation.png"
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
                        src="../images/software-installation.png"
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
                    <Title>Software</Title>
                    <p> Auf Wunsch installieren wir alle benötigten Programme bereits während der Vorbereitung auf Ihren Geräten. Ebenso konfigurieren wir Netzwerke, Drucker, etc. bereits vor, so dass die Geräte sofort einsatzbereit sind. </p>
                    <PillWrapper>
                        <PillLink to="/contact" className="cardsPill">Jetzt kontaktieren</PillLink>
                    </PillWrapper>
                </RightContainerText>
            </ContentContainerRight>
            <ContentContainerLeft>
                <LeftContainerText>
                    <Title>Abholung oder Lieferung</Title>
                    <p>Du kannst die Geräte bei uns in Glattbrugg abholen oder dir kostenlos an den Verwendungsort senden lassen. </p>
                    <PillWrapper>
                        <PillLink to="/contact" className="cardsPill">Jetzt kontaktieren</PillLink>
                    </PillWrapper>
                </LeftContainerText>
                <RightContainerImage>
                    <StaticImage
                        placeholder= 'none'
                        src="../images/pickup-delivery.png"
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

export default Delivery








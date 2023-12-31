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

const Title = styled.h3`
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

const PhaseTitle = styled.h2`
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




const DeliverySection = () => (
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
                        class = "hiw-Image"
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
                        class = "hiw-Image"
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
                        class = "hiw-Image"
                        objectFit="contain"
                    />
                </RightContainerImage>
            </ContentContainerLeft>
        </div>
    </SectionContainer>
)

export default DeliverySection








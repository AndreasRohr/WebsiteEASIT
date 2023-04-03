import * as React from "react"
import {StaticImage} from "gatsby-plugin-image";
import SectionContainer from "../components/sectionContainer";
import styled from "@emotion/styled"
import Pill from "../components/pill";
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






const Order = ({toggleModal}) => (
    <SectionContainer id="intro" height={80}>
        <div id="section1">
            <PhaseTitle>EASIT bestellen</PhaseTitle>
            <ContentContainerRight>
                <LeftContainerImage>
                    <StaticImage
                        placeholder= 'none'
                        src="../images/select-device.png"
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
                    <Title>Gerät auswählen</Title>
                    <p>Egal ob Tablet, Smartphone, Laptop oder Workstation, wir haben eine grosse Auswahl an verschiedenen top Geräten.  </p>
                    <PillWrapper>
                        <Pill action={toggleModal}>Preisliste herunterladen</Pill>
                    </PillWrapper>
                </RightContainerText>
            </ContentContainerRight>
            <ContentContainerLeft>
                <LeftContainerText>
                    <Title>Anfrage senden</Title>
                    <p>Du sendest uns eine Anfrage per Mail mit dem Typ und der Anzahl Geräte, die du benötigst oder vereinbarst einfach und schnell einen Beratungstermin mit uns.</p>
                    <PillWrapper>
                        <PillLink to="/contact" className="cardsPill">Jetzt kontaktieren</PillLink>
                    </PillWrapper>
                </LeftContainerText>
                <RightContainerImage>
                    <StaticImage
                        placeholder= 'none'
                        src="../images/send-request.png"
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
                        src="../images/all-inclusive-service.png"
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
                    <Title>All-inclusive Service</Title>
                    <p>Bei EASIT ist alles rund um deine Geräte inklusive. Wir kümmern uns um alle nötigen Wartungen, tauschen alte oder defekte Geräte aus und leisten Support, wenn etwas mal nicht so läuft wie du es dir wünschst.  </p>
                    <PillWrapper>
                        <PillLink to="/contact" className="cardsPill">Jetzt kontaktieren</PillLink>
                    </PillWrapper>
                </RightContainerText>
            </ContentContainerRight>
        </div>
    </SectionContainer>
)

export default Order








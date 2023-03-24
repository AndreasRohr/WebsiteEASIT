import * as React from "react"
import {StaticImage} from "gatsby-plugin-image";
import SectionContainer from "../components/sectionContainer";
import styled from "@emotion/styled"
import Pill from "../components/pill";


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






const Order = () => (
    <SectionContainer id="intro" height={80}>
        <div id="section1">
            <PhaseTitle>EASIT bestellen</PhaseTitle>
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
                    <Title>Gerät auswählen</Title>
                    <p>Egal ob Tablet, Smartphone, Laptop oder Workstation, wir haben eine grosse Auswahl an verschiedenen top Geräten.  </p>
                    <PillWrapper>
                        <Pill link="#default" >Preisliste herunterladen</Pill>
                    </PillWrapper>
                </RightContainerText>
            </ContentContainerRight>
            <ContentContainerLeft>
                <LeftContainerText>
                    <Title>Anfrage senden</Title>
                    <p>Du sendest uns eine Anfrage per Mail mit dem Typ und der Anzahl Geräte, die du benötigst oder vereinbarst einfach und schnell einen Beratungstermin mit uns.</p>
                    <PillWrapper>
                        <Pill link="#default" >Beratungstermin vereinbaren</Pill>
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
                    <Title>All-inclusive Service</Title>
                    <p>Bei EASIT ist alles rund um deine Geräte inklusive. Wir kümmern uns um alle nötigen Wartungen, tauschen alte oder defekte Geräte aus und leisten Support, wenn etwas mal nicht so läuft wie du es dir wünschst.  </p>
                    <PillWrapper>
                        <Pill link="#default" >Jetzt kontaktieren</Pill>
                    </PillWrapper>
                </RightContainerText>
            </ContentContainerRight>
        </div>
    </SectionContainer>
)

export default Order








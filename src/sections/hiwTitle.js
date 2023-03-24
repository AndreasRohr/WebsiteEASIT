import * as React from "react"
import {StaticImage} from "gatsby-plugin-image";
import SectionContainer from "../components/sectionContainer";
import styled from "@emotion/styled"
import Pill from "../components/pill";

const Title = styled.h1`
margin-top:3rem;

font-size: 4rem;
`

const IntroContainer = styled.div`
height: 70vh;
display: flex;
margin-top: 2.5rem;
`

const IntroContainerLeft = styled.div`
width: 50%;

justify-content: center;
display: flex;
flex-wrap: wrap;
flex-direction: column;
margin-left: 5rem;
`

const IntroContainerRight = styled.div`
justify-content: center;
display: flex;
flex-wrap: wrap;
align-items: center;
width: 50%
`

const Text = styled.p`
font-size: 1.3rem;
margin-right: 4rem;
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

const HiwTitle = () => (
    <SectionContainer id="intro" height={80}>
        <IntroContainer>
            <IntroContainerLeft>
                <Title >Wie funktioniert's?</Title>
                <Text>Die wichtigsten Fragen und Antworten zu Carvolution und unserem Auto-Abo. Von der Bestellung zur Übergabe bis zum Abo-Ende.</Text>
                <PillWrapper>
                    <Pill link="#default" >Zu den FAQs</Pill>
                    <Pill link="#default" className={"pills"}>Kontakt</Pill>
                </PillWrapper>
            </IntroContainerLeft>
            <IntroContainerRight>
                <StaticImage
                    placeholder= 'none'
                    src="../images/laptop-arrows-5.png"
                    loading="eager"
                    width={550}
                    quality={100}
                    formats={["auto", "webp", "avif"]}
                    alt="Laptop with arrows"
                    class = "desktopImage"
                />
            </IntroContainerRight>
        </IntroContainer>
    </SectionContainer>
)

export default HiwTitle
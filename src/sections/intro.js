import * as React from "react"
import {StaticImage} from "gatsby-plugin-image";
import SectionContainer from "../components/sectionContainer";
import styled from "@emotion/styled"
import Pill from "../components/pill";


const Title = styled.h1`
  font-size: 5.125em;
  font-weight: bold;
  font-stretch: Condensed;
  line-height: 1em;
`

const PinkTitle = styled.b`
  color: #dd356e;
  text-shadow: -1px -1px 0 #FFFFFF, 1px -1px 0 #FFFFFF, -1px 1px 0 #FFFFFF, 1px 1px 0 #FFFFFF;
`

const IntroContainer = styled.div`
  justify-content: space-evenly;
  display: flex;
  height: 100vh;
  min-height: 100vh;
  align-items: center;
     @media (max-width: 768px) {
      flex-direction: column;
  }
`

const LeftContainer = styled.div`
  order: 1;
     @media (max-width: 768px) {
      order:2;
      margin-top:-10rem;
  }
`

const RightContainer = styled.div`
  order: 2;
     @media (max-width: 768px) {
      order:1;
      margin-top: 5rem;
        .desktopImage{
             display:none;
         }

`


const Intro = () => (
  <SectionContainer color={"linear-gradient(to bottom right, white 60%, #dd356e 60%)"} id="intro" height={80}>
      <IntroContainer>
          <LeftContainer>
              <Title>Deine <PinkTitle>IT</PinkTitle></Title>
              <Title>einfach einfach</Title>
              <p>
                  by TEQLY
              </p>
              <Pill link="#default">Zum Angebot</Pill>
          </LeftContainer>
          <RightContainer>
              <StaticImage
                  placeholder= 'none'
                  src="../images/laptop-arrows-5.png"
                  loading="eager"
                  width={650}
                  quality={95}
                  formats={["auto", "webp", "avif"]}
                  alt="Laptop with arrows"
                  class = "desktopImage"
              />
          </RightContainer>
      </IntroContainer>
  </SectionContainer>
)

export default Intro

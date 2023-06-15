import * as React from "react"
import {StaticImage} from "gatsby-plugin-image";
import SectionContainer from "../components/sectionContainer";
import styled from "@emotion/styled"
import Pill from "../components/pill";
import {navigate} from "gatsby";



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
  min-height: 78vh;
  align-items: center;
     @media (max-width: 768px) {
      flex-direction: column;
       min-height: 93vh;
  }
`

const LeftContainer = styled.div`
  order: 1;
     @media (max-width: 768px) {
      order:2;
      margin-top:-7rem;
       margin-left: 2rem;
  }
`

const RightContainer = styled.div`
  order: 2;
     @media (max-width: 768px) {
       order: 1;
       margin-top: 5rem;
       display: none;
     }
`

const TeqlyContainer = styled.div`
display: flex;
margin-top: 0.7rem;
margin-bottom: 1.5rem;

.teqly_logo{
min-width:120px;
max-width: 120px;
}
`

const Powered = styled.p`
margin-top: 0.2rem;
`


const IntroSection = ({ toggleModal }) => (
  <SectionContainer color={"linear-gradient(to bottom right, white 60%, #dd356e 60%) "} id="intro" height={70}>
      <IntroContainer>
          <LeftContainer>
              <Title>Deine <PinkTitle>IT</PinkTitle> <br/>einfach einfach</Title>
              <TeqlyContainer>
              <Powered>powered by</Powered>
              <StaticImage
                  placeholder= 'none'
                  src="../images/teqly_logo_black.png"
                  loading="eager"
                  width={120}
                  quality={95}
                  formats={["auto", "webp", "avif"]}
                  alt="TEQLY Logo"
                  className={"teqly_logo"}
                  objectFit={"contain"}
              />
              </TeqlyContainer>
              <Pill action={() => navigate("/pricing")} className={"pills"}>Zum Angebot</Pill>
          </LeftContainer>
          <RightContainer>
              <StaticImage
                  placeholder= 'none'
                  src="../images/laptop-arrows-5.png"
                  loading="eager"
                  width={750}
                  quality={100}
                  formats={["auto", "webp", "avif"]}
                  alt="Laptop with arrows"
                  class = "desktopImage"
              />
          </RightContainer>
      </IntroContainer>
  </SectionContainer>
)

export default IntroSection

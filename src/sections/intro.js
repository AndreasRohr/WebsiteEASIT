import * as React from "react"
import {StaticImage} from "gatsby-plugin-image";
import SectionContainer from "../components/sectionContainer";
import Sticker from "../components/sticker";
import styled from "@emotion/styled"

const Title = styled.h1`
  font-size: 5.125em;
  font-weight: bold;
  font-stretch: Condensed;
  line-height: 1em;
`

const PinkTitle = styled.b`
  color: #dd356e;
`

const IntroContainer = styled.div`
  justify-content: space-evenly;
  display: flex;
  align-items: center;
`

const LeftContainer = styled.div`
  flex-direction: column;
`

const RightContainer = styled.div`
  flex-direction: column;
`


const Intro = () => (
  <SectionContainer color={"#ffffff"} id="intro" height={80}>
      <Sticker />
      <IntroContainer>
          <LeftContainer>
              <Title>Deine <PinkTitle>IT</PinkTitle></Title>
              <Title>einfach einfach</Title>
              <p>
                  by TEQLY
              </p>
          </LeftContainer>
          <RightContainer>
              <StaticImage
                  src="../images/laptop-arrows.png"
                  loading="eager"
                  width={500}
                  quality={95}
                  formats={["auto", "webp", "avif"]}
                  alt="Laptop with arrows"
              />
          </RightContainer>
      </IntroContainer>

  </SectionContainer>
)

export default Intro

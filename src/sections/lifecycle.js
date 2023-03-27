import * as React from "react";
import SectionContainer from "../components/sectionContainer";
import styled from "@emotion/styled"
import {StaticImage} from "gatsby-plugin-image";
import Pill from "../components/pill"
import PillLink from "../components/pillLink"
import { Link } from "gatsby";

const PillStyle = styled.button`
  color: black;
`

const Bulletpoint = styled.h2`
  font-size: 40px;
  color: white;
`

const Description = styled.p`
color: white;
margin-top: 1rem;
margin-bottom: 1.5rem;
`

const CardSection = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  text-align: center;
  margin-top: 3rem;
  max-width: 1900px;
  margin-left: auto;
  margin-right: auto;
`

const Card = styled.div`
  width: 22rem;
  height: 22rem;
  margin: auto;
  margin-top:1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  background: #dd356e;
  box-sizing: border-box;
  padding: 1rem;
  
  
  .cardsPill{
 color: white;
 text-decoration: none;
 align-conten: center;
 align-items: center;
}

`

const ImageWrapper = styled.div`
height: 6.5rem;
margin-top: 0.6rem;
margin-bottom: -1rem;

.lifecycleImage{
-webkit-filter: invert(1);
filter: invert(1);
}


`


const PillWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Lifecycle = () => (
  <SectionContainer color={"#ffffff"}>
      <CardSection>
          <Card>
            <ImageWrapper>
              <StaticImage
                  placeholder= 'none'
                  src="../images/auswaehlen.png"
                  loading="eager"
                  width={60}
                  formats={["auto", "webp", "avif"]}
                  alt="auswaehlen"
                  className="lifecycleImage"
              />
            </ImageWrapper>
              <Bulletpoint>Bestellen</Bulletpoint>
              <Description>
                  LOREM IPSUM DOLOR SI AMET, LOREM IPSUM DOLOR SI AMET, LOREM IPSUM DOLOR SI AMET LOREM IPSUM DOLOR
              </Description>
              <PillWrapper >
                  <PillLink to="/how-it-works#section1" className="cardsPill">Mehr erfahren</PillLink>
              </PillWrapper>

          </Card>
          <Card>
              <ImageWrapper>
              <StaticImage
                  placeholder= 'none'
                  src="../images/bestellen.png"
                  loading="eager"
                  width={60}
                  formats={["auto", "webp", "avif"]}
                  alt="bestellen"
                  className="lifecycleImage"
              />
              </ImageWrapper>
              <Bulletpoint>Bekommen</Bulletpoint>
              <Description>
                  LOREM IPSUM DOLOR SI AMET, LOREM IPSUM DOLOR SI AMET, LOREM IPSUM DOLOR SI AMET LOREM IPSUM DOLOR
              </Description>
              <PillWrapper>
                  <PillLink to="/how-it-works#section2" className="cardsPill">Mehr erfahren</PillLink>
              </PillWrapper>

          </Card>
          <Card>
              <ImageWrapper>
                  <StaticImage
                      placeholder= 'none'
                      src="../images/bestellen.png"
                      loading="eager"
                      width={60}
                      formats={["auto", "webp", "avif"]}
                      alt="bestellen"
                      className="lifecycleImage"
                  />
              </ImageWrapper>
              <Bulletpoint>Loslegen</Bulletpoint>
              <Description>
                  LOREM IPSUM DOLOR SI AMET, LOREM IPSUM DOLOR SI AMET, LOREM IPSUM DOLOR SI AMET LOREM IPSUM DOLOR
              </Description>
              <PillWrapper>
                  <PillLink to="/how-it-works#section3" className="cardsPill">Mehr erfahren</PillLink>
              </PillWrapper>

          </Card>
          <Card>
              <ImageWrapper>
              <StaticImage
                  placeholder= 'none'
                  src="../images/loslegen.png"
                  loading="eager"
                  width={60}
                  formats={["auto", "webp", "avif"]}
                  alt="loslegen"
                  className="lifecycleImage"
              />
              </ImageWrapper>
              <Bulletpoint>Zurückgeben</Bulletpoint>
              <Description>
                  LOREM IPSUM DOLOR SI AMET, LOREM IPSUM DOLOR SI AMET, LOREM IPSUM DOLOR SI AMET LOREM IPSUM DOLOR
              </Description>
              <PillWrapper>
                  <PillLink to="/how-it-works#section4" className="cardsPill">Mehr erfahren</PillLink>
              </PillWrapper>

          </Card>
      </CardSection>
  </SectionContainer>
)

export default Lifecycle

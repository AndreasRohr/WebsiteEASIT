import * as React from "react";
import SectionContainer from "../components/sectionContainer";
import styled from "@emotion/styled"
import {StaticImage} from "gatsby-plugin-image";
import PillLink from "../components/pillLink"


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
  max-width: 1900px;
  margin: 1rem auto 4rem;
`

const Card = styled.div`
  width: 22rem;
  height: 22rem;
  margin: 1rem auto;
  border-radius: 8px;
  background: #dd356e;
  box-sizing: border-box;
  padding: 1rem;


  .cardsPill {
    color: white;
    text-decoration: none;
    align-content: center;
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
const Title = styled.h1`
  text-align: center;
  margin-top: 4rem;
  font-size: 3rem;
  margin-bottom: 4rem;
`




const PillWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Lifecycle = () => (
  <SectionContainer color={"#F3F4F7"}>
      <Title>So funktioniert EASIT</Title>
      <CardSection>
          <Card>
            <ImageWrapper>
              <StaticImage
                  placeholder= 'none'
                  src="../images/bestellen.png"
                  loading="eager"
                  width={60}
                  formats={["auto", "webp", "avif"]}
                  alt="auswaehlen"
                  className="lifecycleImage"
              />
            </ImageWrapper>
              <Bulletpoint>Bestellen</Bulletpoint>
              <Description>
                  Du sendest uns eine Anfrage per Mail mit dem Typ und der Anzahl Geräte, die du benötigst.
              </Description>
              <PillWrapper >
                  <PillLink to="/how-it-works#section1" className="cardsPill">Mehr erfahren</PillLink>
              </PillWrapper>

          </Card>
          <Card>
              <ImageWrapper>
              <StaticImage
                  placeholder= 'none'
                  src="../images/receiver.png"
                  loading="eager"
                  width={80}
                  formats={["auto", "webp", "avif"]}
                  alt="bestellen"
                  className="lifecycleImage"
              />
              </ImageWrapper>
              <Bulletpoint>Erhalten</Bulletpoint>
              <Description>
                  Du kannst die Geräte bei uns in Glattbrugg abholen oder dir kostenlos an den Verwendungsort senden lassen.
              </Description>
              <PillWrapper>
                  <PillLink to="/how-it-works#section2" className="cardsPill">Mehr erfahren</PillLink>
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
                      alt="bestellen"
                      className="lifecycleImage"
                  />
              </ImageWrapper>
              <Bulletpoint>Loslegen</Bulletpoint>
              <Description>
                  Via der EASIT Supportplattform erreichst du unser Support-Team per Mail, Chat und Telefon.
              </Description>
              <PillWrapper>
                  <PillLink to="/how-it-works#section3" className="cardsPill">Mehr erfahren</PillLink>
              </PillWrapper>

          </Card>
          <Card>
              <ImageWrapper>
              <StaticImage
                  placeholder= 'none'
                  src="../images/return.png"
                  loading="eager"
                  width={60}
                  formats={["auto", "webp", "avif"]}
                  alt="loslegen"
                  className="lifecycleImage"
              />
              </ImageWrapper>
              <Bulletpoint>Zurückgeben</Bulletpoint>
              <Description>
                  Du möchtest nach der Laufzeit dein Gerät zurückgeben? Wir melden uns frühzeitig, um eine Rückgabe zu vereinbaren.
              </Description>
              <PillWrapper>
                  <PillLink to="/how-it-works#section4" className="cardsPill">Mehr erfahren</PillLink>
              </PillWrapper>

          </Card>
      </CardSection>
  </SectionContainer>
)

export default Lifecycle

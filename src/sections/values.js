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
  display: flex;
  flex-direction: column;
  justify-content: center;


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

  @media only screen
  and (min-device-width: 375px)
  and (max-device-width: 812px)
  and (-webkit-min-device-pixel-ratio: 3) {
    font-size: 2rem;
    margin-top: 0;
  }
`




const PillWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Values = () => (
    <SectionContainer color={"#F3F4F7"}>
        <Title>Unsere Werte</Title>
        <CardSection>
            <Card>
                <Bulletpoint>Schnell</Bulletpoint>
                <Description>
                    Wir versichern eine schnelle Abwicklung der Bestellungen. Bei Geräten welche wir an Lager haben können wir eine Lieferfrist von 3 Arbeitstagen garantieren!
                </Description>

            </Card>
            <Card>
                <Bulletpoint>Einfach</Bulletpoint>
                <Description>
                    Die Bestellung bei EASIT ist für unsere Kunden so einfach wie möglich. Senden Sie uns eine Anfrage mit den benötigten Geräten und wir kümmern uns um den Rest.
                </Description>

            </Card>
            <Card>
                <Bulletpoint>Zuverlässig</Bulletpoint>
                <Description>
                   Wir sind davon überzeugt, dass unsere Geräte fristgerecht und mit allem nötigem ausgestattet ist wie unsere Kunden es sich gewünscht haben. Wenn unsere Kunden zufrieden sind, sind wir es auch!
                </Description>

            </Card>
        </CardSection>
    </SectionContainer>
)

export default Values

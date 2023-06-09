import * as React from "react";
import SectionContainer from "../components/sectionContainer";
import styled from "@emotion/styled"
import {StaticImage} from "gatsby-plugin-image";
import PillLink from "../components/pillLink"
import {navigate} from "gatsby";
import Pill from "../components/pill";


const Bulletpoint = styled.h2`
  font-size: 40px;
  color: white;
`

const Description = styled.p`
color: white;
margin-top: 0.5rem;
margin-bottom: 1.5rem;
  min-height: 4.5rem;
  max-height: 4.5rem;
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
  font-size: 2rem;
  color: white;

  @media only screen
  and (min-device-width: 375px)
  and (max-device-width: 812px)
  and (-webkit-min-device-pixel-ratio: 3) {
    font-size: 2rem;
    margin-top: 0;
  }
`

const Title2 = styled.h1`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 4rem;
  color: white;

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
const ProductNotFoundSection = () => (
    <SectionContainer color={"#dd356e"}>
      <Title>Nicht dabei was du suchst? Kein Problem, wir nehmen für dich gerne weitere Geräte ins Sortiment!</Title>
        <Title2>Schreibe uns einfach eine Nachricht mit den benötigten Geräten und wir kümmern uns um Ihr Anliegen</Title2>
        <PillWrapper>
            <Pill action={() => navigate("/contact")} className={"pills"}>Kontakt</Pill>
        </PillWrapper>
    </SectionContainer>
)

export default ProductNotFoundSection

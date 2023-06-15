import * as React from "react"
import SectionContainer from "../components/sectionContainer";
import Calculator from "../components/calculator";
import styled from "@emotion/styled"

const Title = styled.h1`
  text-align: center;
  margin-top: 4rem;
  font-size: 3rem;
  margin-bottom: 2rem;


  @media only screen
  and (min-device-width: 375px)
  and (max-device-width: 812px)
  and (-webkit-min-device-pixel-ratio: 3) {
    font-size: 2rem;
    margin-top: 0;
  }
`

const CalculationSection = ({ toggleModal }) => (
    <SectionContainer >
        <div style={{overflow:"hidden"}}>
        <Title>Beispielhafte Gesamtkostenrechnung</Title>
        <Calculator toggleModal={toggleModal}/>
        </div>
    </SectionContainer>
)

export default CalculationSection
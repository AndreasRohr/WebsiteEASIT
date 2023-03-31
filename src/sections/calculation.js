import * as React from "react"
import SectionContainer from "../components/sectionContainer";
import Calculator from "../components/calculator";
import styled from "@emotion/styled"

const Title = styled.h1`
  text-align: center;
  margin-top: 4rem;
  font-size: 3rem;
  margin-bottom: 2rem;
`

const Calculation = ({ toggleModal }) => (
    <SectionContainer color={"#FFFFFF"}>
        <Title>Beispielhafte Gesamtkostenrechnung</Title>
        <Calculator toggleModal={toggleModal}/>
    </SectionContainer>
)

export default Calculation
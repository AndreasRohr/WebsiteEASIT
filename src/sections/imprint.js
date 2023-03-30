import * as React from "react"
import SectionContainer from "../components/sectionContainer";
import styled from "@emotion/styled"

const Title = styled.h1`
  margin-top: 3rem;
  font-size: 4rem;
  margin-bottom: 1rem;
`

const UnderSectionTitle = styled.h1`
  font-size: 2rem;
`

const Content = styled.p`
  font-size: 1rem;
`

const ContentSpace = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`

const Wrapper = styled.div`
min-height: 89vh;
`

const Imprint = () => (
    <SectionContainer color={"#ffffff"}>
        <Wrapper>


<Title>Impressum</Title>
        <UnderSectionTitle>Hauptsitz, Büro & Lager</UnderSectionTitle>
        <Content><b>TEQLY GmbH</b></Content>
        <Content>Europa-Strassse 30</Content>
        <Content>8152 Glattbrugg</Content>
        <ContentSpace>Schweiz</ContentSpace>
        <Content> <b>UID: </b>CHE-171.042.900</Content>
        <ContentSpace><b>MWST: </b>CHE-171.042.900 MWST</ContentSpace>
        <Content><b>Mail: </b>info@teqly.ch</Content>
        <Content><b>Telefon: </b>+41 56 511 11 33</Content>
        </Wrapper>
    </SectionContainer>
)

export default Imprint
import * as React from "react"
import styled from "@emotion/styled";

const Container = styled.div`
  background: #ffffff;
  width: 100%;
`

const Intro = () => (
  <Container>
    <h1>Senken Sie IT-Kosten und verbessern Sie Ihre Infrastruktur!</h1>
    <p>
      Mit EASIT.rent können Sie Hard- & Software sowie Support zu einem Fixpreis
      einkaufen. Dank unserem All-Inclusive Angebot müssen Sie sich nicht mehr
      um Ihre IT-Infrastruktur kümmern.
    </p>
  </Container>
)

export default Intro

import * as React from "react";
import SectionContainer from "../components/sectionContainer";
import styled from "@emotion/styled"
import {navigate} from "gatsby";
import Pill from "../components/pill";

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

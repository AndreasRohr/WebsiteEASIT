import * as React from "react"
import SectionContainer from "../components/sectionContainer";
import styled from "@emotion/styled"
import congratulations from "../images/Congratulations.gif";

const Body = styled.div`
margin-top: 3rem;
  height: 86vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  
  .successImage{
    height: 50%;
    width: 50%;
  }
  
  h1{
    margin-bottom: 2rem;
  }
`

const SuccessSection = () => (
    <SectionContainer color={"#FFFFFF"} height={80}>
        <Body>
            <h1>Vielen Dank für Ihre Anfrage!</h1>
            <h1>Wir werden uns in Kürze bei Ihnen melden</h1>
        <img className="successImage" src={congratulations} alt="Success! Congratulations from Leo" />
        </Body>
    </SectionContainer>
)

export default SuccessSection

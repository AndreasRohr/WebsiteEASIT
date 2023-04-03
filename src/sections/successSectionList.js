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
    width: auto;
    @media only screen
    and (min-device-width: 375px)
    and (max-device-width: 812px)
    and (-webkit-min-device-pixel-ratio: 3) {
     height:30%;
    }
  }
  
  h1{
    margin-bottom: 2rem;

    @media only screen
    and (min-device-width: 375px)
    and (max-device-width: 812px)
    and (-webkit-min-device-pixel-ratio: 3) {
      margin-left: auto;
      margin-right: auto;
      text-align: center;
      font-size: 1.5rem;
    }
  }
`

const SuccessSectionList = () => (
    <SectionContainer color={"#FFFFFF"} height={80}>
        <Body>
            <h1>Vielen Dank für deine Anfrage!</h1>
            <h1>Bitte überprüfe dein E-Mail Postfach um die Preisliste herunterzuladen</h1>
        <img className="successImage" src={congratulations} alt="Success! Congratulations from Leo" />
        </Body>
    </SectionContainer>
)

export default SuccessSectionList

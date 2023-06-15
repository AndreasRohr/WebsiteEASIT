import * as React from "react"
import SectionContainer from "../components/sectionContainer";
import Collapsible from "../components/collapsible";
import data from "../content/faq.json"
import styled from "@emotion/styled"
import Pill from "../components/pill"
import { navigate } from "gatsby"

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
const FaqWrapper = styled.div`
  margin-bottom: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .faq-pill{
    margin-left: 1rem;
  }
  @media only screen
  and (min-device-width: 375px)
  and (max-device-width: 812px)
  and (-webkit-min-device-pixel-ratio: 3) {
    padding-bottom: 2rem;
    width: 95%;
    margin: auto;
  }
`

const ImportantFaqSection = () => {

  const impFAQ = data.questions.slice(0, 3);

  return (
    <SectionContainer color={"#FFFFFF"}>
        <Title>Die wichtigsten Fragen</Title>
        <FaqWrapper>
        {impFAQ.map((item, index) => {
            return <><Collapsible key={index} title={item.title} content={item.content} /> <br /></>
        })}
        <Pill className={"faq-pill"} action={() => navigate("/faq")}>Alle Fragen</Pill>
        </FaqWrapper>
    </SectionContainer>
)}

export default ImportantFaqSection
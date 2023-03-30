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
  margin-bottom: 2rem;
`
const FaqWrapper = styled.div`
margin-bottom: 4rem;
`

const ImportantFaq = () => {

  const impFAQ = data.questions.slice(0, 3);

  return (
    <SectionContainer color={"#F3F4F7"}>
        <Title>Die wichtigsten Fragen</Title>
        <FaqWrapper>
        {impFAQ.map((item, index) => {
            return <><Collapsible key={index} title={item.title} content={item.content} /> <br /></>
        })}
        <Pill action={() => navigate("/faq")}>Alle Fragen</Pill>
        </FaqWrapper>
    </SectionContainer>
)}

export default ImportantFaq
import * as React from "react"
import SectionContainer from "../components/sectionContainer";
import Collapsible from "../components/collapsible";
import data from "../content/importantfaq.json"
import styled from "@emotion/styled"

const Title = styled.h1`
  text-align: center;
  margin-top: 4rem;
  font-size: 3rem;
  margin-bottom: 4rem;
`
const FaqWrapper = styled.div`
margin-bottom: 4rem;
`

const ImportantFaq = () => (
    <SectionContainer color={"#F3F4F7"}>
        <Title>Die wichtigsten Fragen</Title>
        <FaqWrapper>
        {data.questions.map((item, index) => {
            return <><Collapsible key={index} title={item.title} content={item.content} /> <br /></>
        })}
        </FaqWrapper>
    </SectionContainer>
)

export default ImportantFaq
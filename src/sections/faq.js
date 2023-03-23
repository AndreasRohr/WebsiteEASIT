import * as React from "react"
import SectionContainer from "../components/sectionContainer";
import Collapsible from "../components/collapsible";
import data from "../content/faq.json"
import styled from "@emotion/styled"

const Title = styled.h1`
text-align: center;
margin-bottom: 3rem;
`

const Faq = () => (
    <SectionContainer color={"#ffffff"}>
        <Title>Die wichtigsten Fragen</Title>
        {data.questions.map((item, index) => {
            return <><Collapsible key={index} title={item.title} content={item.content} /> <br /></>
        })}
    </SectionContainer>
)

export default Faq
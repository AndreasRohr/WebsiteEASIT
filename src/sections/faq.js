import * as React from "react"
import SectionContainer from "../components/sectionContainer";
import Collapsible from "../components/collapsible";
import data from "../content/faq.json"

const Faq = () => (
    <SectionContainer color={"#ffffff"}>
        {data.questions.map((item, index) => {
            return <><Collapsible key={index} title={item.title} content={item.content} /> <br /></>
        })}
    </SectionContainer>
)

export default Faq
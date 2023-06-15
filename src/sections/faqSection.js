import * as React from "react"
import SectionContainer from "../components/sectionContainer";
import Collapsible from "../components/collapsible";
import data from "../content/faq.json"

const FaqSection = () => {

  return (
    <SectionContainer color={"#ffffff"}>
        <div style={{width:"95%", margin:"auto"}}>
        {
            data.questions.map((item, index) => {
            return <><Collapsible key={index} title={item.title} content={item.content} /> <br /></>
        })}
        </div>
    </SectionContainer>
)}

export default FaqSection
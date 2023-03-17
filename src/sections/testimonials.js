import * as React from "react"
import Testimonial from "../components/testemonial";
import SectionContainer from "../components/sectionContainer";
import data from "../content/testimonials.json";
import styled from "@emotion/styled"

const Button = styled.button`

`

const Testimonials = () => {

    const [index, setIndex] = React.useState(0);

    const increment = () => {
        setIndex((index + 1) % (testimonials.length));
        console.log(index);
    }

    const testimonials = [
        <Testimonial name={data.xana.name} content={data.xana.content} logo={"xana-logo.png"}/>,
        <Testimonial name={data.firmaA.name} content={data.firmaA.content}/>,
        <Testimonial name={data.firmaB.name} content={data.firmaB.content}/>
    ]

    return (
        <SectionContainer color={"#273C2C"} textcolor={"#ffffff"}>
            <h1>Testimonials</h1>
            <Button onClick={increment}>Next</Button>
            {testimonials[index]}
        </SectionContainer>
    )
}

export default Testimonials
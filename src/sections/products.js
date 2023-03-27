import * as React from "react";
import SectionContainer from "../components/sectionContainer";
import MultiCarousel from "../components/multiCarousel";
import styled from "@emotion/styled"

const Title = styled.h1`
text-align: center;
`
const Products = () => (
    <SectionContainer color={"#ffffff"} id={"productSection"}>
        <Title> Unsere Produkte</Title>
        <MultiCarousel></MultiCarousel>
    </SectionContainer>
)

export default Products

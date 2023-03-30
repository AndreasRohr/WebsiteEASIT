import * as React from "react";
import SectionContainer from "../components/sectionContainer";
import MultiCarousel from "../components/multiCarousel";
import "../styles/carousel.css"

const Products = () => (
    <SectionContainer color={"#ffffff"} id={"productSection"}>
        <MultiCarousel></MultiCarousel>
    </SectionContainer>
)

export default Products

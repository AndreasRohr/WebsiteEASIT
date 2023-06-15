import * as React from "react";
import SectionContainer from "../components/sectionContainer";
import MultiCarousel from "../components/multiCarousel";
import "../styles/carousel.css"

const ProductsSection = () => (
    <SectionContainer color={"#ffffff"} id={"productSection"}>
        <MultiCarousel></MultiCarousel>
    </SectionContainer>
)

export default ProductsSection

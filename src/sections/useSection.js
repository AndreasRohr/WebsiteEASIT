import * as React from "react";
import SectionContainer from "../components/sectionContainer";
import "../styles/carousel.css"
import UseCarousel from "../components/useCarousel";

const UseSection = () => (
    <SectionContainer color={"#ffffff"} id={"productSection"}>
        <UseCarousel></UseCarousel>
    </SectionContainer>
)

export default UseSection
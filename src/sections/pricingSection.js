import * as React from "react"
import SectionContainer from "../components/sectionContainer";
import Calculator from "../components/calculator";
import styled from "@emotion/styled"
import PricingTableLaptop from "../components/pricingTableLaptop";
import PricingTableLaptopTouch from "../components/pricingTableLaptopTouch";
import ScrollComponent from "../components/scrollComponent";
import PricingTableDesktop from "../components/pricingTableDesktop";
import PricingTableTablet from "../components/pricingTableTablet";

const Title = styled.h1`
  text-align: center;
  margin-top: 4rem;
  font-size: 3rem;
  margin-bottom: 2rem;


  @media only screen
  and (min-device-width: 375px)
  and (max-device-width: 812px)
  and (-webkit-min-device-pixel-ratio: 3) {
    font-size: 2rem;
    margin-top: 0;
  }
`

const PricingSection = () => (
    <SectionContainer >
        <div style={{overflow:"hidden"}}>
            <PricingTableLaptop></PricingTableLaptop>
            <PricingTableLaptopTouch></PricingTableLaptopTouch>
            <PricingTableDesktop></PricingTableDesktop>
            <PricingTableTablet></PricingTableTablet>
        </div>
    </SectionContainer>
)

export default PricingSection
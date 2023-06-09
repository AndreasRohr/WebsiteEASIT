import * as React from "react"
import SectionContainer from "../components/sectionContainer";
import PricingTableLaptop from "../components/pricingTableLaptop";
import PricingTableLaptopTouch from "../components/pricingTableLaptopTouch";
import PricingTableDesktop from "../components/pricingTableDesktop";
import PricingTableTablet from "../components/pricingTableTablet";

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
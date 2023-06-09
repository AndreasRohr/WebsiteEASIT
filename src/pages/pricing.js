import * as React from "react"

import Layout from "./layout"
import Seo from "../components/seo"
import PricingTable from "../sections/pricingSection";
import PricingSection from "../sections/pricingSection";
import ScrollComponent from "../components/scrollComponent";
import PricingTitle from "../sections/pricingTitle";
import ProductNotFoundSection from "../sections/productNotFoundSection";



const Pricing = () => {

    return (
        <Layout>
            <PricingTitle></PricingTitle>
            <ScrollComponent style={{marginLeft: "rem"}} title1="Laptop" title2="Laptop Touch" title3="Desktops" title4="Tablets" />
            <PricingSection></PricingSection>
            <ProductNotFoundSection></ProductNotFoundSection>
        </Layout>
    )
}

export const Head = () => <Seo title="Wie funktioniert's" lang="de" />

export default Pricing
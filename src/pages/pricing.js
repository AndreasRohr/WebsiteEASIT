import * as React from "react"

import Layout from "./layout"
import Seo from "../components/seo"
import PricingSection from "../sections/pricingSection";
import ScrollComponent from "../components/scrollComponent";
import PricingTitle from "../sections/pricingTitle";
import ProductNotFoundSection from "../sections/productNotFoundSection";



const Pricing = () => {

    return (
        <Layout>
            <PricingTitle />
            <ScrollComponent style={{marginLeft: "rem"}} title1="Laptop" title2="Laptop Touch" title3="Desktops" title4="Tablets" />
            <PricingSection />
            <ProductNotFoundSection />
        </Layout>
    )
}

export const Head = () => <Seo title="Wie viel Kostet EASIT?" lang="de" description="Sehen Sie die Preisliste unserer Geräte und den dazugehörigen Leistungsumfang. Egal ob Laptop, Desktop oder Tablet. Mieten Sie Ihre Geräte einfach mit EASIT."/>

export default Pricing
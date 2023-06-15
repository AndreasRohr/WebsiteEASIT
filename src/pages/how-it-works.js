import * as React from "react"

import Layout from "./layout"
import Seo from "../components/seo"
import HiwTitleSection from "../sections/hiwTitleSection";
import ScrollComponent from "../components/scrollComponent"
import OrderSection from "../sections/orderSection";
import DeliverySection from "../sections/deliverySection";
import Starting from "../sections/starting";
import RetournSection from "../sections/retournSection";


const HowItWorksPage = () => {

        const [modal, setModal] = React.useState(false);

        const toggleModal = () => {
                modal ? setModal(false) : setModal(true);
                console.log(modal)
        }

        return (
          <Layout toggleModal={toggleModal} modal={modal}>
                  <HiwTitleSection />
                  <ScrollComponent title1="Bestellen" title2="Inbetriebnahme" title3="Im Alltag" title4="Rücknahme" />
                  <OrderSection toggleModal={toggleModal}/>
                  <DeliverySection />
                  <Starting />
                  <RetournSection />
          </Layout>
        )
}

export const Head = () => <Seo title="Wie funktioniert's?" description="In nur 4 Schritten können Sie bei EASIT ein einsatzbereites Gerät bestellen. Erfahren Sie hier mehr zu den Details der einzelnen Schritte." lang="de" />

export default HowItWorksPage
import * as React from "react"

import Layout from "./layout"
import Seo from "../components/seo"
import HiwTitle from "../sections/hiwTitle";
import ScrollComponent from "../components/scrollComponent"
import Order from "../sections/order";
import Delivery from "../sections/delivery";
import Starting from "../sections/starting";
import Retourn from "../sections/retourn";


const HowItWorksPage = () => {

        const [modal, setModal] = React.useState(false);

        const toggleModal = () => {
                modal ? setModal(false) : setModal(true);
                console.log(modal)
        }

        return (
          <Layout toggleModal={toggleModal} modal={modal}>
                  <HiwTitle />
                  <ScrollComponent title1="Bestellen" title2="Inbetriebnahme" title3="Im Alltag" title4="Rücknahme" />
                  <Order toggleModal={toggleModal}/>
                  <Delivery />
                  <Starting />
                  <Retourn />
          </Layout>
        )
}

export const Head = () => <Seo title="Wie funktioniert's?" description="In nur 4 Schritten können Sie bei EASIT ein einsatzbereites Gerät bestellen. Erfahren Sie hier mehr zu den Details der einzelnen Schritte." lang="de" />

export default HowItWorksPage
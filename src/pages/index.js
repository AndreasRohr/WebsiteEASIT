import * as React from "react"

import Layout from "./layout"
import Seo from "../components/seo"
import IntroSection from "../sections/introSection"
import LifecycleSection from "../sections/lifecycleSection"
import CalculationSection from "../sections/calculationSection";
import Sticker from "../components/sticker";
import ProductsSection from "../sections/productsSection";
import ImportantFaqSection from "../sections/importantFaqSection";
import Values from "../sections/values";
import UseSection from "../sections/useSection";

const IndexPage = () => {

  const [modal, setModal] = React.useState(false);

  const toggleModal = () => {
    modal ? setModal(false) : setModal(true);
    console.log(modal)
  }

  return (
    <Layout toggleModal={toggleModal} modal={modal}>
      <Sticker />
      <IntroSection toggleModal={toggleModal}/>
      <ProductsSection/>
      <LifecycleSection />
      <CalculationSection toggleModal={toggleModal}/>
      <UseSection />
      <Values />
      <ImportantFaqSection />
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage

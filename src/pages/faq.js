import Seo from "../components/seo";
import * as React from "react";
import Layout from "./layout";
import Faq from "../sections/faq";
import FaqTitle from "../sections/faqTitle";


const FaqPage = () => {

  const [modal, setModal] = React.useState(false);

  const toggleModal = () => {
    modal ? setModal(false) : setModal(true);
    console.log(modal)
  }

    return (
        <Layout toggleModal={toggleModal} modal={modal}>
            <FaqTitle />
            <Faq />
        </Layout>
    )
}

export const Head = () => <Seo title="Contact" lang="de" />

export default FaqPage
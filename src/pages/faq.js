import Seo from "../components/seo";
import * as React from "react";
import Layout from "./layout";
import Faq from "../sections/faq";
import FaqTitle from "../sections/faqTitle";


const FaqPage = () => {

    return (
        <Layout>
            <FaqTitle />
            <Faq />
        </Layout>
    )
}

export const Head = () => <Seo title="Contact" lang="de" />

export default FaqPage
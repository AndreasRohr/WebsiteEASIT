import Seo from "../components/seo";
import * as React from "react";
import Layout from "./layout";
import Agb from "../sections/agb";

const LegalAgb = () => {

    return (
        <Layout>
            <Agb></Agb>
        </Layout>
    )
}

export const Head = () => <Seo title="Contact" lang="de" />

export default LegalAgb
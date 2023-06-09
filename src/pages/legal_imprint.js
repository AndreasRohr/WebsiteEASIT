import Seo from "../components/seo";
import * as React from "react";
import Layout from "./layout";
import Imprint from "../sections/imprint";

const LegalImprint = () => {

    return (
        <Layout>
          <Imprint />
        </Layout>
    )
}

export const Head = () => <Seo title="Impressum" lang="de" />

export default LegalImprint
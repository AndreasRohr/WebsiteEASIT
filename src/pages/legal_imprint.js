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

export const Head = () => <Seo title="Impressum" description="Hauptsitz, Büro und Lager von EASIT befinden sich bei TEQLY GmbH, Europa-Strasse 30 in 8152 Glattbrugg" lang="de" />

export default LegalImprint
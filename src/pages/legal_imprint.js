import Seo from "../components/seo";
import * as React from "react";
import Layout from "./layout";
import ImprintSection from "../sections/imprintSection";

const LegalImprint = () => {

    return (
        <Layout>
          <ImprintSection />
        </Layout>
    )
}

export const Head = () => <Seo title="Impressum" description="Hauptsitz, Büro und Lager von EASIT befinden sich bei TEQLY GmbH, Europa-Strasse 30 in 8152 Glattbrugg" lang="de" />

export default LegalImprint
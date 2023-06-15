import Seo from "../components/seo";
import * as React from "react";
import Layout from "./layout";
import AgbSection from "../sections/agbSection";

const LegalAgb = () => {

    return (
        <Layout>
            <AgbSection />
        </Layout>
    )
}

export const Head = () => <Seo title="Allgemeine Geschäftsbedingungen" lang="de" description="Die TEQLY GmbH behält sich das Recht vor, die AGB zu ändern. Massgebend ist jeweils die zum Zeitpunkt der Bestellung geltende Version der AGB für EASIT."/>

export default LegalAgb
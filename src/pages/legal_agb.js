import Seo from "../components/seo";
import * as React from "react";
import Layout from "./layout";
import Agb from "../sections/agb";

const LegalAgb = () => {

    return (
        <Layout>
            <Agb />
        </Layout>
    )
}

export const Head = () => <Seo title="Allgemeine Geschäftsbedingungen" lang="de" description="Die TEQLY GmbH behält sich das Recht vor, die AGB zu ändern. Massgebend ist jeweils die zum Zeitpunkt der Bestellung geltende Version der AGB für EASIT."/>

export default LegalAgb
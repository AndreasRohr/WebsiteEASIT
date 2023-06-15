import Seo from "../components/seo";
import * as React from "react";
import Layout from "./layout";
import DataPrivacySection from "../sections/dataPrivacySection";

const LegalData = () => {

    return (
        <Layout>
            <DataPrivacySection />
        </Layout>
    )
}

export const Head = () => <Seo title="Datenschutzbestimmungen" lang="de" description="Verantwortliche Stelle im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutzgrundverordnung, ist: TEQLY GmbH, Europa-Strasse 30, 8152 Glattbrugg"/>

export default LegalData
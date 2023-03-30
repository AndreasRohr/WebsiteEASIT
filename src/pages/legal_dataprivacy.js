import Seo from "../components/seo";
import * as React from "react";
import Layout from "./layout";
import DataPrivacy from "../sections/dataprivacy";

const LegalData = () => {

    return (
        <Layout>
            <DataPrivacy></DataPrivacy>
        </Layout>
    )
}

export const Head = () => <Seo title="Contact" lang="de" />

export default LegalData
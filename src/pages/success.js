import * as React from "react"
import Layout from "./layout"
import Seo from "../components/seo"
import congratulations from "../images/congratulations.gif"


const Success = () => (
  <Layout>
    <h1 style={{ marginTop: "3em" }}>Vielen Dank für Ihre Anfrage!<br/>
    Wir werden uns in Kürze bei Ihnen melden</h1>
    <img src={congratulations} alt="Success! Congratulations from Leo" />
  </Layout>
)

export const Head = () => <Seo title="🚀 Success" lang="de" />

export default Success
import * as React from "react"

import Layout from "./layout"
import Seo from "../components/seo"
import Intro from "../sections/intro"
import Lifecycle from "../sections/lifecycle"
import Faq from "../sections/faq";
import Calculation from "../sections/calculation";

const IndexPage = () => (
  <Layout>
    <Intro />
    <Faq />
    <Lifecycle />
    <Calculation />
  </Layout>
)

export const Head = () => <Seo title="Home" lang="de" />

export default IndexPage

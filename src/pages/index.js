import * as React from "react"

import Layout from "./layout"
import Seo from "../components/seo"
import Intro from "../sections/intro"
import Lifecycle from "../sections/lifecycle"

const IndexPage = () => (
  <Layout>
    <Intro />
    <Lifecycle />
  </Layout>
)

export const Head = () => <Seo title="Home" lang="de" />

export default IndexPage

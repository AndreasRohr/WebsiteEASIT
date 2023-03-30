import * as React from "react"

import Layout from "./layout"
import Seo from "../components/seo"
import Intro from "../sections/intro"
import Lifecycle from "../sections/lifecycle"
import Calculation from "../sections/calculation";
import Sticker from "../components/sticker";
import Products from "../sections/products";
import ImportantFaq from "../sections/importantFaq";

const IndexPage = () => (
  <Layout>
      <Sticker />
    <Intro />
      <Lifecycle />
<Products></Products>
      <Calculation />
    <ImportantFaq />
  </Layout>
)

export const Head = () => <Seo title="Home" lang="de" />

export default IndexPage

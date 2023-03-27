import * as React from "react"

import Layout from "./layout"
import Seo from "../components/seo"
import Intro from "../sections/intro"
import Lifecycle from "../sections/lifecycle"
import Faq from "../sections/faq";
import Calculation from "../sections/calculation";
import Sticker from "../components/sticker";
import Products from "../sections/products";

const IndexPage = () => (
  <Layout>
      <Sticker />
    <Intro />
      <Lifecycle />
<Products></Products>
      <Calculation />
    <Faq />
  </Layout>
)

export const Head = () => <Seo title="Home" lang="de" />

export default IndexPage

import * as React from "react"
import Layout from "./layout"
import Seo from "../components/seo"
import SuccessSection from "../sections/successSection";

const Success = () => (
  <Layout>
 <SuccessSection></SuccessSection>
  </Layout>
)

export const Head = () => <Seo title="🚀 Success" lang="de" />

export default Success
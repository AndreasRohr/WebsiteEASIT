import * as React from "react"
import Layout from "./layout"
import Seo from "../components/seo"
import SuccessSectionList from "../sections/successSectionList";

const Success = () => (
  <Layout>
 <SuccessSectionList></SuccessSectionList>
  </Layout>
)

export const Head = () => <Seo title="🚀 Success" lang="de" />

export default Success
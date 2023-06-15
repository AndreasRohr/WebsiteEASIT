/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import HeaderSection from "../sections/headerSection"
import FooterSection from "../sections/footerSection"
import "./layout.css"
import Modal from "../components/modal";

const Layout = ({ children, toggleModal, modal }) => {

  return (
    <>
      <HeaderSection toggleModal={toggleModal}/>
      {modal && <Modal toggleModal={toggleModal}/>}
      <main>{children}</main>
      <FooterSection />
    </>
  )
}

export default Layout

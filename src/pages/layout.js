/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import Header from "../sections/header"
import Footer from "../sections/footer"
import "./layout.css"
import Modal from "../components/modal";

const Layout = ({ children, toggleModal, modal }) => {

  return (
    <>
      <Header toggleModal={toggleModal}/>
      {modal && <Modal toggleModal={toggleModal}/>}
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout

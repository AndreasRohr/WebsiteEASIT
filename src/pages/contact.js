import Seo from "../components/seo";
import * as React from "react";
import Layout from "./layout";
import ContactForm from "../sections/contactForm";

const ContactPage = () => {

  const [modal, setModal] = React.useState(false);

  const toggleModal = () => {
    modal ? setModal(false) : setModal(true);
    console.log(modal)
  }

  return (
    <Layout toggleModal={toggleModal} modal={modal}>
      <ContactForm />
    </Layout>
  )
}

export const Head = () => <Seo title="Contact" lang="de" />

export default ContactPage
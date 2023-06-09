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

export const Head = () => <Seo title="Kontaktformular" lang="de" description="Haben Sie Fragen zu EASIT oder wünschen Sie eine Offerte? Füllen Sie unverbindlich das Kontaktformular aus und wir melden uns so schnell wie möglich bei Ihnen."/>

export default ContactPage
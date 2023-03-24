import Seo from "../components/seo";
import * as React from "react";
import Layout from "./layout";
import ContactForm from "../sections/contactForm";

const ContactPage = () => {

  return (
    <Layout>
      <ContactForm />
    </Layout>
  )
}

export const Head = () => <Seo title="Contact" lang="de" />

export default ContactPage
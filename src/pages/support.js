import Seo from "../components/seo";
import * as React from "react";
import Layout from "./layout";
import SupportForm from "../sections/supportForm";

const ContactPage = () => {

    const [modal, setModal] = React.useState(false);

    const toggleModal = () => {
        modal ? setModal(false) : setModal(true);
        console.log(modal)
    }

    return (
        <Layout toggleModal={toggleModal} modal={modal}>
            <SupportForm />
        </Layout>
    )
}

export const Head = () => <Seo title="Contact" lang="de" description="Benötigen Sie hilfe für ein EASIT Gerät oder haben Sie Fragen zu unserem Angebot? Füllen Sie das Formular aus und wir werden uns in kürze bei Ihnen melden."/>

export default ContactPage
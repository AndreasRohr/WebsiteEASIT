import * as React from "react";
import { useState } from "react";
import SectionContainer from "../components/sectionContainer";
import { navigate } from "gatsby";

const ContactForm = () => {

  const [formState, setFormState] = useState({
    fullname: "",
    email: "",
    message: ""
  });

  const serverUrl = 'https://support.teqly.app';

  const zsubmit = event => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    setFormState(JSON.stringify(Object.fromEntries(formData)));
    getZammadConfig(serverUrl).then(config=>{
      zammadSubmit(config).then(result=>{
        console.debug(result);
        //Redirect to where you want... or update the UI in other way.
      });
    })
    navigate("/success");
  };

  const fingerprint='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASw';

  async function getZammadConfig(server){
    const response = await fetch(server+'/api/v1/form_config' ,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        fingerprint: fingerprint
      }),
    });

    return response.json();
  }

  async function zammadSubmit(config){
    if (!config.enabled){
      console.error("Server reports form Submission disabled! ")
    }
    const response = await fetch(config.endpoint,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: formState.fullname,
        email: formState.email,
        body: formState.message,
        title: "EASIT Contact Form",
        fingerprint: fingerprint,
        token: config.token
      })
    });
    return response.json();
  }

  return (
    <SectionContainer height={100}>
      <h1 style={{ marginTop: "3em" }}>Dieser Text ist nicht Sichtbar</h1>
      <h1>Dieser schon</h1>
      <h1>Der hier auch</h1>
      <h1>Kontaktformular</h1>
      <form name="contact-form" method="post" onSubmit={zsubmit}>
      <input name="fullname" type="text" placeholder="Name" />
      <input name="email" type="email" placeholder="Email" />
      <textarea name="message" placeholder="Message" />
      <button type="submit">Send</button>
      </form>
    </SectionContainer>
  )
}

export default ContactForm
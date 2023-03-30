import * as React from "react";
import { useState } from "react";
import SectionContainer from "../components/sectionContainer";
import { navigate } from "gatsby";

const ContactForm = () => {

  const serverUrl = 'https://support.teqly.app';

  const [loading, setLoading] = useState(false);

  const zsubmit = event => {
    setLoading(true);
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const jsonData = Object.fromEntries(formData);
    getZammadConfig(serverUrl).then(res=>{
      zammadSubmit(res, jsonData).then(result=>{
        console.debug(result);
        if('ticket' in result){
          navigate("/success");
        }
        console.error(result);
      });
    });
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

  async function zammadSubmit(config, requestData){
    if (!config.enabled){
      console.error("Server reports form Submission disabled! ")
    }
    const response = await fetch(config.endpoint,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: requestData.name,
        email: requestData.email,
        body: requestData.body,
        title: "EASIT Contact Form",
        fingerprint: fingerprint,
        token: config.token
      })
    });
    return response.json();
  }

  return (
    <SectionContainer height={100}>
      {
        loading ? (
          <img src="../images/loading-animation.svg" alt="loading"/>
        ) : (
          <form name="contact-form" method="post" onSubmit={zsubmit}>
            <input name="name" type="text" placeholder="Name" />
            <input name="email" type="email" placeholder="Email" />
            <textarea name="body" placeholder="Message" />
            <button type="submit">Send</button>
          </form>
        )
      }
      <h1 style={{ marginTop: "3em" }}>Dieser Text ist nicht Sichtbar</h1>
      <h1>Dieser schon</h1>
      <h1>Der hier auch</h1>
      <h1>Kontaktformular</h1>

    </SectionContainer>
  )
}

export default ContactForm
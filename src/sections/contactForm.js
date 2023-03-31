import * as React from "react";
import { useState } from "react";
import SectionContainer from "../components/sectionContainer";
import { navigate } from "gatsby";
import {StaticImage} from "gatsby-plugin-image";
import "../styles/contactForm.css"



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

      <SectionContainer id="intro" height={80}>
          <div className="introContainer">
              <div className="introContainerLeft">
                  {
                      loading ? (
                          <img src="../images/loading-animation.svg" alt="loading"/>
                      ) : (
                          <div className="box-body">
                          <div className="box-body-description">
                              <h1> Beratung oder Verkauf?</h1>
                              <p>Interessierst du dich für eines der Angebote von EASIT? Jetzt unverbindlich mit uns in Kontakt treten!</p>
                          </div>
                              <form className="contactForm" name="contact-form" method="post" onSubmit={zsubmit}>
                                  <div className="input-label-container">

                                      <input className="inputField" name="name" type="text" placeholder="Name" id="name" />
                                  </div>
                                  <div className="input-label-container">
                                      <input className="inputField" id="email" name="email" type="email" placeholder="E-mail" />
                                  </div>
                                  <div className="input-label-container">
                                      <textarea className="inputArea" id="body" name="body" placeholder="Nachricht..." />
                                  </div>
                                  <div className="box-footer">
                                      <div className="pull-right">
                                          <button className="btnSubmit" type="submit">Senden</button>
                                      </div>
                                  </div>
                              </form>
                      </div>

                      )
                  }

              </div>
              <div className="introContainerRight">
                  <StaticImage
                      placeholder= 'none'
                      src="../images/contact.png"
                      loading="eager"
                      width={550}
                      quality={100}
                      formats={["auto", "webp", "avif"]}
                      alt="Laptop with arrows"
                      class = "desktopImage"
                  />
              </div>
          </div>
      </SectionContainer>
  )
}

export default ContactForm
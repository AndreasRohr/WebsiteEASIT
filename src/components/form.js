import * as React from 'react';
import "../styles/modalForm.css"
import {StaticImage} from "gatsby-plugin-image";
import {navigate} from "gatsby";

const Form = ({close}) => {

    const url = 'https://newsletter.teqly.app/index.php/lists/qd727o3cv9abb/subscribe';

    function handleSubmit(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();

        // Read the form data
        const form = e.target;
        const formData = new FormData(form);

        // You can pass formData as a fetch body directly:
        fetch(url, {
            method: form.method,
            mode: "no-cors",
            credentials: "omit",
            body: formData
        });

        close();
        navigate("/successlist");
    }

    return (
      <form onSubmit={handleSubmit} method="post">
          <div className="modalBox">
              <div className="box-header">
                  <div className="close-button-wrapper"></div>
                  <div className="logo-wrapper">
                      <StaticImage
                          placeholder= 'none'
                          src="../images/EASIT-Logo-slim.png"
                          loading="eager"
                          width={200}
                          quality={95}
                          formats={["auto", "webp", "avif"]}
                          alt="EASIT Logo"
                          className="easit-logo-form"
                      />
                  </div>
                  <div className="close-button-wrapper">
                      <button className="closeButton" onClick={close}>X</button>
                  </div>

              </div>
              <div className="box-body">
                  <div className="box-body-description">
                      Erhalte mit nur wenigen Klicks unsere Preisliste per Mail.
                  </div>
                  <div className="input-label-container">
                      <label className="inputLabel" htmlFor="COMPANY">Firma* </label>
                      <input className="inputField" placeholder="Firma" type="text" defaultValue="" name="COMPANY" id="COMPANY" required="required"/>
                  </div>
                  <div className="input-label-container">
                      <label className="inputLabel"  htmlFor="FNAME">Vorname </label>
                      <input className="inputField" placeholder="Vorname" type="text" defaultValue="" name="FNAME" id="FNAME"/>
                  </div>
                  <div className="input-label-container">
                      <label className="inputLabel" htmlFor="LNAME">Nachname </label>
                      <input className="inputField" placeholder="Nachname" type="text" defaultValue="" name="LNAME" id="LNAME"/>
                  </div>
                  <div className="input-label-container">
                      <label className="inputLabel" htmlFor="PHONE">Telefon </label>
                      <input className="inputField" placeholder="Telefon" type="text" defaultValue="" name="PHONE" id="PHONE"/>
                  </div>
                  <div className="input-label-container">
                      <label className="inputLabel" htmlFor="EMAIL" required="required">E-Mail* </label>
                      <input className="inputField" placeholder="E-Mail" type="text" defaultValue="" name="EMAIL" id="EMAIL" required="required"/>
                  </div>
              </div>
              <div className="box-footer">
                  <div className="pull-right">
                      <input type="submit" className="btnSubmit" name="yt0" value="Preisliste bestellen"/>

                  </div>
                  <div className="clearfix"></div>
              </div>
          </div>
      </form>
    )
}

export default Form;
import * as React from 'react';

const Form = ({closeOnSubmit}) => {

    const url = 'https://newsletter.teqly.app/index.php/lists/qd727o3cv9abb/subscribe';

    function handleSubmit(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();

        // Read the form data
        const form = e.target;
        const formData = new FormData(form);
        console.log(formData);

        // You can pass formData as a fetch body directly:
        fetch(url, {
            method: form.method,
            mode: "no-cors",
            credentials: "omit",
            body: formData
        });

        // Or you can work with it as a plain object:
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);

        closeOnSubmit();
    }

    return (
      <form onSubmit={handleSubmit} method="post">
          <div className="box box-primary borderless">
              <div className="box-header">
                  <h3 className="box-title">
                      EASIT
                  </h3>
              </div>
              <div className="box-body">
                  <div>
                      Erhalten Sie unsere Preisliste per Mail mit nur wenigen Klicks.
                  </div>
                  <div>
                      <label htmlFor="COMPANY">Company*</label>
                      <input placeholder="Company" type="text" defaultValue="" name="COMPANY" id="COMPANY" required="required"/>
                  </div>
                  <div>
                      <label htmlFor="FNAME">First name</label>
                      <input placeholder="First name" type="text" defaultValue="" name="FNAME" id="FNAME"/>
                  </div>
                  <div>
                      <label htmlFor="LNAME">Last name</label>
                      <input placeholder="Last name" type="text" defaultValue="" name="LNAME" id="LNAME"/>
                  </div>
                  <div>
                      <label htmlFor="PHONE">Phone number</label>
                      <input placeholder="Phone number" type="text" defaultValue="+41 56 511 11 33" name="PHONE" id="PHONE"/>
                  </div>
                  <div>
                      <label htmlFor="EMAIL" className="required">Email*</label>
                      <input className="form-control field-email field-type-text" placeholder="Email" type="text" defaultValue="" name="EMAIL" id="EMAIL" required="required"/>
                  </div>
              </div>
              <div className="box-footer">
                  <div className="pull-right">
                      <input type="submit" className="btn btn-primary btn-flat" name="yt0" value="Subscribe"/>
                  </div>
                  <div className="clearfix"></div>
              </div>
          </div>
      </form>
    )
}

export default Form;
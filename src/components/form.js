import * as React from 'react';

const Form = () => (
    <form action="https://newsletter.teqly.app/index.php/lists/qd727o3cv9abb/subscribe" method="post">
        <div className="box box-primary borderless">
            <div className="box-header">
                <h3 className="box-title">
                    EASIT
                </h3>
            </div>
            <div className="box-body">
                <div className="callout callout-info">
                    We're happy you decided to subscribe to our email list.<br/>
                    Please take a few seconds and fill in the list details in order to subscribe to our list.<br/>
                    You will receive an email to confirm your subscription, just to be sure this is your email address.
                </div>
                <div className="form-group field-text wrap-company">
                    <label htmlFor="COMPANY" className="required">Company <span className="required">*</span></label>
                    <input className="form-control field-company field-type-text" placeholder="Company" type="text"
                           value=""
                           name="COMPANY" id="COMPANY"/>
                </div>
                <div className="form-group field-text wrap-fname">
                    <label htmlFor="FNAME">First name</label> <input
                    className="form-control field-fname field-type-text" placeholder="First name" type="text" value=""
                    name="FNAME" id="FNAME"/>
                </div>
                <div className="form-group field-text wrap-lname">
                    <label htmlFor="LNAME">Last name</label> <input className="form-control field-lname field-type-text"
                                                                    placeholder="Last name" type="text" value=""
                                                                    name="LNAME" id="LNAME"/>
                </div>
                <div className="form-group field-phonenumber wrap-phone">
                    <label htmlFor="PHONE">Phone number</label> <input
                    className="form-control field-phone field-type-phonenumber" placeholder="Phone number" type="text"
                    value="+41 56 511 11 33" name="PHONE" id=
                        "PHONE"/>
                    <div className="js-error-message errorMessage"></div>
                </div>
                <div className="form-group field-text wrap-email">
                    <label htmlFor="EMAIL" className="required">Email <span className="required">*</span></label> <input
                    className="form-control field-email field-type-text" placeholder="Email" type="text" value="" name=
                    "EMAIL" id="EMAIL"/>
                </div>
                <div aria-hidden="true">
                    <input type="text" name="3ac4b4b98fbcff71b161bb69a5cd1d4d6027d266" tabIndex="-1"
                           autoComplete="3ac4b4b98fbcff71b161bb69a5cd1d4d6027d266" value=""/>
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

export default Form;
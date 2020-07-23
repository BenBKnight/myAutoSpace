import React from "react";

function Signup() {
    return (
        <div className="section loginInput is-parent is-vertical vehicle-style m-auto">
            <div className="box">
                <div className="container form-group">
                    <h2 className="title">Sign Up Form</h2>
                    <form className="signup">
                        <div className="container form-group">
                            <label className="label" for="exampleInputEmail1">Email address:</label>
                            <input type="email" className="input form-control" id="email-input" placeholder="Email" />
                        </div>
                        <div className="container form-group">
                            <label className="label" for="fistName">First Name:</label>
                            <input type="text" className="input form-control" id="firstNameId" placeholder="First Name" />
                        </div>

                        <div className="container form-group">
                            <label className="label" for="lastName">Last Name:</label>
                            <input type="text" className="input form-control" id="lastNameId" placeholder="Last Name" />
                        </div>

                        <div className="container form-group">
                            <label className="label" for="location">Location:</label>
                            <input type="text" className="input form-control" id="locationId" placeholder="Location" />
                        </div>

                        <div className="container form-group">
                            <label className="label" for="exampleInputPassword1">Password:</label>
                            <input type="password" className="input form-control" id="password-input" placeholder="Password" />
                        </div>

                        {/* <div style={{display: none}} id="alert" className="alert alert-danger" role="alert">
                            <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                            <span className="sr-only">Error:</span> <span className="msg"></span>
                        </div> */}

                        <button type="submit" className="button is-link btn btn-default">Sign Me Up!</button>
                    </form>
                    <br />
                    <br />
                    <br />
                </div>
            </div>
        </div>
    );
}

export default Signup;
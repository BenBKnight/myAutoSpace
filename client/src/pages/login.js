import React from "react";

function Login() {

    // Java Script  <script type="text/javascript" src="js/login.js"></script>

    return (
        <div>
            <div className="hero text-center">
                <h1>Login Page</h1>
            </div>

            <div className="section has-text-centered is-parent is-vertical container-center-col">
                <div className="container is-child box is-12">
                    <p className="title">
                        Welcome to CarFacts!</p>
                    <p>CarFacts is your all-in-one app to track all maintenance and modifications done to your vehicle.</p>
                    <br />
                    <p>If this is your first time here, click sign up and add your first vehicle!</p>
                    <br />
                    <br />
                    <div className="is-parent box vehicle-style">
                        <div className="container ">
                            <h2 className="title is-underlined">Login Form</h2>
                            <form className="login">
                                <div className="field form-group">
                                    <label className="label" for="exampleInputEmail1">Email address:</label>
                                    <input type="email" className="input form-control" id="email-input" placeholder="User@email.com" />
                                </div>

                                <div className="container form-group">
                                    <label className="label" for="exampleInputPassword1">Password</label>
                                    <input type="password" className="input loginInput form-control" id="password-input" placeholder="Password" />
                                </div>

                                <div className="container">
                                    <div>
                                        <button type="submit" className="button loginInput btn btn-default">Login</button>
                                    </div>

                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;

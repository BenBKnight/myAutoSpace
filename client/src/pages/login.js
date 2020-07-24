import React from "react";
import $ from "jquery";

function Login() {

    $(document).ready(() => {
        const navbar = $(".nav-hide");
        const logoutHide = $(".logoutHide");
        const loginHide = $(".login-hide");
        $(document).ready(() => {
            loginHide.hide();
        });
        $(document).ready(() => {
            logoutHide.hide();
        });
        $(document).ready(() => {
            navbar.hide();
        });
        // Getting references to our form and inputs
        const loginForm = $("form.login");
        const emailInput = $("input#email-input");
        const passwordInput = $("input#password-input");

        // When the form is submitted, we validate there's an email and password entered
        loginForm.on("submit", event => {
            event.preventDefault();
            const userData = {
                email: emailInput.val().trim(),
                password: passwordInput.val().trim()
            };

            if (!userData.email || !userData.password) {
                return;
            }

            // If we have an email and password we run the loginUser function and clear the form
            loginUser(userData.email, userData.password);
            emailInput.val("");
            passwordInput.val("");
        });
        // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
        function loginUser(email, password) {
            $.post("/api/login", {
                email: email,
                password: password
            })
                .then(() => {
                    // console.log("hit");
                    window.location.assign("/members");
                    // If there's an error, log the error
                })
                .catch(err => {
                    console.log(err);
                });
        }
    });
    const signup = $(".signup-hide");
    signup.on("click", event => {
        event.preventDefault();
        window.location.assign("/signup");
    });
















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

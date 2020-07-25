import React, { Component } from "react";
import API from "../utils/API";
import FormInput from "../components/formInput";
import FormInputButton from "../components/FormInputButton";
// import { route } from "../../../routes/login.routes";
import { Link, withRouter } from "react-router-dom";

class Login extends Component {
    state = {
        email: "",
        password: ""
    };
    handleLogin = (e) => {
        e.preventDefault();
        let user = { email: this.state.email, password: this.state.password }
        console.log("login page:", user)
        // use withRouter here READ: LINK & WITHROUTER & react router docs
        API.loginUser(user)
            .then((res) => {
                console.log("api returned", res);
                //router to members
            })
            .catch(err => {
                console.log(err);
            })
    };

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        let value = event.target.value;
        const name = event.target.type;

        if (name === "password") {
            value = value.substring(0, 15);
        }
        // Updating the input's state
        this.setState({
            [name]: value
        });
        console.log(this.state);
    };

    // handleInputChange = event => {

    //     console.log(event);
    //     const userEmail = event.target.value;
    //     const userPassword = event.target.value;
    //     console.log(userEmail);
    //     console.log(userPassword);
    //     this.setState({ email: userEmail, password: userPassword });
    //     console.log(this.state);
    // };
    //     function loginUser(email, password) {
    //         $.post("/api/login", {
    //             email: email,
    //             password: password
    //         })
    //             .then(() => {
    //                 // console.log("hit");
    //                 // React router
    //                 window.location.assign("/members");
    //                 // If there's an error, log the error
    //             })
    //             .catch(err => {
    //                 console.log(err);
    //             });
    //     }
    // ==============================
    // $(document).ready(() => {
    //     const navbar = $(".nav-hide");
    //     const logoutHide = $(".logoutHide");
    //     const loginHide = $(".login-hide");
    //     $(document).ready(() => {
    //         loginHide.hide();
    //     });
    //     $(document).ready(() => {
    //         logoutHide.hide();
    //     });
    //     $(document).ready(() => {
    //         navbar.hide();
    //     });
    //     // Getting references to our form and inputs
    //     const loginForm = $("form.login");
    //     const emailInput = $("input#email-input");
    //     const passwordInput = $("input#password-input");

    //     // When the form is submitted, we validate there's an email and password entered

    //     loginForm.on("submit", event => {
    //         event.preventDefault();
    //         const userData = {
    //             email: emailInput.val().trim(),
    //             password: passwordInput.val().trim()
    //         };

    //         if (!userData.email || !userData.password) {
    //             return;
    //         }

    //         // If we have an email and password we run the loginUser function and clear the form
    //         loginUser(userData.email, userData.password);
    //         emailInput.val("");
    //         passwordInput.val("");
    //     });
    //     // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
    //     function loginUser(email, password) {
    //         $.post("/api/login", {
    //             email: email,
    //             password: password
    //         })
    //             .then(() => {
    //                 // console.log("hit");
    //                 // React router
    //                 window.location.assign("/members");
    //                 // If there's an error, log the error
    //             })
    //             .catch(err => {
    //                 console.log(err);
    //             });
    //     }
    // });
    // const signup = $(".signup-hide");
    // signup.on("click", event => {
    //     event.preventDefault();
    //     window.location.assign("/signup");
    // });


    // function loginUser(e) {
    //     e.preventDefault();
    //     API.loginUser
    // }

    render() {
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
                            <div className="container">
                                <h2 className="title is-underlined">Login Form</h2>
                                <form className="login">
                                    <FormInput handleInputChange={this.handleInputChange} value={this.state.email} htmlFor="exampleInputEmail1" id="email-input" placeholder="User@email.com" type="email">Email address:</FormInput>
                                    <FormInput handleInputChange={this.handleInputChange} value={this.state.password} htmlFor="exampleInputEmail1" id="email-input" placeholder="Password" type="password">Password</FormInput>
                                    {/* <Link to="/Members"> */}
                                    <FormInputButton handleLogin={this.handleLogin}>Login</FormInputButton>
                                    {/* </Link> */}
                                    {/* /* <div className="field form-group">
                                    <label className="label" htmlFor="exampleInputEmail1">Email address:</label>
                                    <input type="email" className="input form-control" id="email-input" placeholder="User@email.com" />
                                </div>

                                <div className="container form-group">
                                    <label className="label" htmlFor="exampleInputPassword1">Password</label>
                                    <input type="password" className="input loginInput form-control" id="password-input" placeholder="Password" />
                                </div> 

                                    <div className="container">
                                        <div>
                                            <button type="submit" className="button loginInput btn btn-default" >Login</button>
                                        </div>

                                    </div> */}

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Login;

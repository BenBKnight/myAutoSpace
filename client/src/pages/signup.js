import React, { Component } from "react";
import FormInput from "../components/formInput";
import FormInputButton from "../components/FormInputButton";

class Signup extends Component {
    state = {
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        location: ""
    }
    //     // When the signup button is clicked, we validate the email and password are not blank
    //     signUpForm.on("submit", event => {
    //         event.preventDefault();
    //         const userData = {
    //             email: emailInput.val().trim(),
    //             password: passwordInput.val().trim(),
    //             firstName: firstNameInput.val().trim(),
    //             lastName: lastNameInput.val().trim(),
    //             location: locationInput.val()
    //         };

    //         if (!userData.email || !userData.password) {
    //             return;
    //         }
    //         // If we have an email and password, run the signUpUser function
    //         signUpUser(
    //             userData.email,
    //             userData.password,
    //             userData.firstName,
    //             userData.lastName,
    //             userData.location
    //         );
    //         emailInput.val("");
    //         passwordInput.val("");
    //         firstNameInput.val("");
    //         lastNameInput.val("");
    //         locationInput.val("");
    //     });

    //     // Does a post to the signup route. If successful, we are redirected to the members page
    //     // Otherwise we log any errors
    //     function signUpUser(email, password, firstName, lastName, location) {
    //         $.post("/api/signup", {
    //             email: email,
    //             password: password,
    //             firstName: firstName,
    //             lastName: lastName,
    //             location: location
    //         })
    //             .then(() => {
    //                 window.location.assign("/members");
    //                 // If there's an error, handle it by throwing up a bootstrap alert
    //             })
    //             .catch(handleLoginErr);
    //     }

    //     function handleLoginErr(err) {
    //         $("#alert .msg").text(err.responseJSON);
    //         $("#alert").fadeIn(500);
    //     }
    // });
    // const loginBtn = $(".login-hide");
    // loginBtn.on("click", event => {
    //     event.preventDefault();
    //     window.location.assign("/login");
    // });
    render() {
        return (
            <div className="section loginInput is-parent is-vertical vehicle-style m-auto" >
                <div className="box">
                    <div className="container form-group">
                        <h2 className="title">Sign Up Form</h2>
                        <form className="signup">
                            <FormInput handleInputChange={this.handleInputChange} value={this.state.email} htmlFor="exampleInputEmail1" placeholder="User@email.com" type="email">Email address:</FormInput>
                            <FormInput handleInputChange={this.handleInputChange} value={this.state.password} htmlFor="exampleInputEmail1" placeholder="Password" type="password">Password</FormInput>
                            <FormInput handleInputChange={this.handleInputChange} value={this.state.firstName} htmlFor="exampleInputEmail1" placeholder="First Name" type="text"></FormInput>
                            <FormInput handleInputChange={this.handleInputChange} value={this.state.lastName} htmlFor="exampleInputEmail1" placeholder="Last Name" type="text"></FormInput>
                            <FormInput handleInputChange={this.handleInputChange} value={this.state.location} htmlFor="exampleInputEmail1" placeholder="Location" type="text"></FormInput>
                            <FormInputButton handleLogin={this.handleLogin}>Login</FormInputButton>
                        </form>
                        <br />
                        <br />
                        <br />
                    </div>
                </div>
            </div>
        );
    }
}
export default Signup;
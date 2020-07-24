import React from "react";
import $ from "jquery";

function Signup() {
    $(document).ready(() => {
        const navbar = $(".nav-hide");
        const logoutHide = $(".logoutHide");
        const signupHide = $(".signup-hide");
        $(document).ready(() => {
            signupHide.hide();
        });
        $(document).ready(() => {
            logoutHide.hide();
        });
        $(document).ready(() => {
            navbar.hide();
        });
        // Getting references to our form and input
        const signUpForm = $("form.signup");
        const emailInput = $("input#email-input");
        const passwordInput = $("input#password-input");
        const firstNameInput = $("input#firstNameId");
        const lastNameInput = $("input#lastNameId");
        const locationInput = $("input#locationId");

        // When the signup button is clicked, we validate the email and password are not blank
        signUpForm.on("submit", event => {
            event.preventDefault();
            const userData = {
                email: emailInput.val().trim(),
                password: passwordInput.val().trim(),
                firstName: firstNameInput.val().trim(),
                lastName: lastNameInput.val().trim(),
                location: locationInput.val()
            };

            if (!userData.email || !userData.password) {
                return;
            }
            // If we have an email and password, run the signUpUser function
            signUpUser(
                userData.email,
                userData.password,
                userData.firstName,
                userData.lastName,
                userData.location
            );
            emailInput.val("");
            passwordInput.val("");
            firstNameInput.val("");
            lastNameInput.val("");
            locationInput.val("");
        });

        // Does a post to the signup route. If successful, we are redirected to the members page
        // Otherwise we log any errors
        function signUpUser(email, password, firstName, lastName, location) {
            $.post("/api/signup", {
                email: email,
                password: password,
                firstName: firstName,
                lastName: lastName,
                location: location
            })
                .then(() => {
                    window.location.assign("/members");
                    // If there's an error, handle it by throwing up a bootstrap alert
                })
                .catch(handleLoginErr);
        }

        function handleLoginErr(err) {
            $("#alert .msg").text(err.responseJSON);
            $("#alert").fadeIn(500);
        }
    });
    const loginBtn = $(".login-hide");
    loginBtn.on("click", event => {
        event.preventDefault();
        window.location.assign("/login");
    });
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
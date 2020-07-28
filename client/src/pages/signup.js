import React, { Component } from "react";
import FormInput from "../components/formInput";
import FormInputButton from "../components/FormInputButton";
import API from "../utils/API";

class Signup extends Component {
    state = {
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        location: ""
    };

    handleFormSubmit = event => {
        event.preventDefault();
        let user = {
            email: this.state.email.trim(),
            password: this.state.password.trim(),
            firstName: this.state.firstName.trim(),
            lastName: this.state.lastName.trim(),
            location: this.state.location.trim()
        }
        if (!this.state.email || !this.state.password) {
            return;
        }
        console.log(user)
        // user.email, user.password, user.firstName, user.lastName, user.location
        API.signUp(user)
            .then((res) => {
                console.log("returned", res);
                //router to members
            })
            .catch(err => {
                console.log(err);
            })
    };
    handleSignUpErr(err) {
        alert(err);
        // $("#alert").fadeIn(500);
    }

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        let value = event.target.value;
        const name = event.target.id;

        if (name === "password") {
            value = value.substring(0, 15);
        }
        // Updating the input's state
        this.setState({
            [name]: value
        });
        // console.log(this.state);
    };

    render() {
        return (
            <div className="section loginInput is-parent is-vertical vehicle-style m-auto" >
                <div className="box">
                    <div className="container form-group">
                        <h2 className="title">Sign Up Form</h2>
                        <form className="signup">
                            <FormInput handleInputChange={this.handleInputChange} value={this.state.email} id="email" htmlFor="exampleInputEmail1" placeholder="User@email.com" type="email">Email address:</FormInput>
                            <FormInput handleInputChange={this.handleInputChange} value={this.state.password} id="password" htmlFor="exampleInputEmail1" placeholder="Password" type="password">Password</FormInput>
                            <FormInput handleInputChange={this.handleInputChange} value={this.state.firstName} id="firstName" htmlFor="exampleInputEmail1" placeholder="First Name" type="firstName"></FormInput>
                            <FormInput handleInputChange={this.handleInputChange} value={this.state.lastName} id="lastName" htmlFor="exampleInputEmail1" placeholder="Last Name" type="lastName"></FormInput>
                            <FormInput handleInputChange={this.handleInputChange} value={this.state.location} id="location" htmlFor="exampleInputEmail1" placeholder="Location" type="location"></FormInput>
                            <FormInputButton handleFormSubmit={this.handleFormSubmit}>Sign Up</FormInputButton>
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
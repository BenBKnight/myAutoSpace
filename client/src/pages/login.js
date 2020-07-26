import React, { Component } from "react";
import API from "../utils/API";
import FormInput from "../components/formInput";
import FormInputButton from "../components/FormInputButton";
// import { Link, withRouter } from "react-router-dom";

class Login extends Component {
    state = {
        email: "",
        password: ""
    };
    handleFormSubmit = (e) => {
        e.preventDefault();
        let user = {
            email: this.state.email.trim(),
            password: this.state.password.trim()
        }
        if (!this.state.email || !this.state.password) {
            return;
        }
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
        }); if (!this.state.email || !this.state.password) {
            return;
        }
    };

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
                                    <FormInput handleInputChange={this.handleInputChange} value={this.state.email} htmlFor="exampleInputEmail1" id="emailInput" placeholder="User@email.com" type="email">Email address:</FormInput>
                                    <FormInput handleInputChange={this.handleInputChange} value={this.state.password} htmlFor="exampleInputEmail1" id="passwordInput" placeholder="Password" type="password">Password</FormInput>
                                    {/* <Link to="/Members"> */}
                                    <FormInputButton handleFormSubmit={this.handleFormSubmit}>Login</FormInputButton>
                                    {/* </Link> */}
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

import React, { Component } from "react";
import FormInput from "../components/formInput/formInput";
import FormInputButton from "../components/formInputButton/FormInputButton";
import API from "../utils/API";
import Card from "../components/card/card";
import Header from "../components/header/header";

class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            location: ""
        };
    }
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
        API.signUp(user)
            .then(() => {
                this.props.history.push("/Members")
            })
            .catch(err => {
                console.log(err);
            })
    };
    handleSignUpErr(err) {
        alert(err);
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
    };

    render() {
        return (
            <div>
                <Card>
                    <Header className={"title"} value={"Sign up form"} />
                </Card>
                <br />
                <Card>
                    <form className="signup">
                        <FormInput handleInputChange={this.handleInputChange} value={this.state.email} id="email" htmlFor="exampleInputEmail1" placeholder="User@email.com" type="email">Email address:</FormInput>
                        <FormInput handleInputChange={this.handleInputChange} value={this.state.password} id="password" htmlFor="exampleInputEmail1" placeholder="Password" type="password">Password</FormInput>
                        <FormInput handleInputChange={this.handleInputChange} value={this.state.firstName} id="firstName" htmlFor="exampleInputEmail1" placeholder="First Name" type="firstName"></FormInput>
                        <FormInput handleInputChange={this.handleInputChange} value={this.state.lastName} id="lastName" htmlFor="exampleInputEmail1" placeholder="Last Name" type="lastName"></FormInput>
                        <FormInput handleInputChange={this.handleInputChange} value={this.state.location} id="location" htmlFor="exampleInputEmail1" placeholder="Location" type="location"></FormInput>
                        <FormInputButton handleFormSubmit={this.handleFormSubmit}>Sign Up</FormInputButton>
                    </form>
                </Card>

            </div>
        );
    }
}
export default Signup;
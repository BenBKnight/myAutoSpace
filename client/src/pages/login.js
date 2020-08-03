import React, { Component } from "react";
import './login.css';
import API from "../utils/API";
import FormInput from "../components/formInput/formInput";
import FormInputButton from "../components/formInputButton/FormInputButton";
import { withRouter } from "react-router-dom";
import Card from "../components/card/card";
import Header from "../components/header/header";
import Subtitle from "../components/subtitle/subtitle";
import { AuthContext } from "../utils/authContext";
import Navbar from '../components/Navbar copy';
import NavbarInput from '../components/NavbarInput';
import ActionBtn from '../components/ActionBtn';
import BulletPoint from '../components/BulletPoint';
import FormInputTwo from '../components/FormInputTwo'


class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      emailInput: '',
      passwordInput: '',
      email: '',
      password: '',
      id: '',
      firstName: '',
      lastName: '',
      location: ''
    };
  };
  static contextType = AuthContext;

  handleFormSubmit = (e) => {
    e.preventDefault();

    let user = {
      email: this.state.email.trim(),
      password: this.state.password.trim()
    }
    if (!this.state.email || !this.state.password) {
      return;
    }
    API.loginUser(user)
      .then((res) => {
        this.props.history.push("/Members")
      })
      .catch(err => {
        console.log(err);
      })
  };
  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.id;
    console.log(event.target.id);

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
        <Navbar>
          <NavbarInput handleInputChange={this.handleInputChange} value={this.state.emailInput} name='username' type='email' label='Username' id="emailInput"/>
          <NavbarInput handleInputChange={this.handleInputChange} value={this.state.passwordInput} name='password' type='password' label='Password' id="passwordInput"/>
          <ActionBtn url='/garage'>Login</ActionBtn>
        </Navbar>
        <h1 className='mainHeader'>MyCarSpace</h1>
        <br></br>
        <div className='signInFlex'>

          <div className='signUpWrapper'>
            <h1 className='signUpHeader'>Become a car owner</h1>
            <h1 className='signUpHeader'>not just a driver</h1>
            <span className='flex'>
              <FormInputTwo handleInputChange={this.handleInputChange} value={this.state.firstName} setWidth='width40' name='firstName' type='text' label='First Name' id='firstName'></FormInputTwo>
              <FormInputTwo handleInputChange={this.handleInputChange} value={this.state.lastName} setWidth='width40' name='lastName' type='text' label='Last Name' id='lastName'></FormInputTwo>
            </span>
            <FormInputTwo handleInputChange={this.handleInputChange} value={this.state.email} setWidth='width100' name='email' type='email' label='Email' id='email'></FormInputTwo>
            <FormInputTwo handleInputChange={this.handleInputChange} value={this.state.password} setWidth='width100' name='password' type='password' label='Password' id='password'></FormInputTwo>
            <FormInputTwo handleInputChange={this.handleInputChange} value={this.state.location} setWidth='width100' name='location' type='text' label='Location' id='location'></FormInputTwo>
            <ActionBtn>Sign Up</ActionBtn>
          </div>

          <div className='width40'>
            <BulletPoint src={require('../components/BulletPoint/img/wrenches.png')}>Keep track of the work you do on your vehicle</BulletPoint>
            <BulletPoint src={require('../components/BulletPoint/img/speedo.png')}>See upcoming maintenance needed to maintain your vehicle</BulletPoint>
            <BulletPoint src={require('../components/BulletPoint/img/chat.png')}>Connect with other vehicle owners and share information</BulletPoint>
          </div>
        </div>
        <br />
        <br />
        <Card title="Login Page">
          <form className="login">
            <FormInput className={"style"} handleInputChange={this.handleInputChange} value={this.state.email} htmlFor="exampleInputEmail1" id="emailInput" placeholder="User@email.com" type="email">Email address:</FormInput>
            <FormInput handleInputChange={this.handleInputChange} value={this.state.password} htmlFor="exampleInputEmail1" id="passwordInput" placeholder="Password" type="password">Password</FormInput>
            <FormInputButton handleFormSubmit={this.handleFormSubmit}>Login</FormInputButton>
          </form>
        </Card>
      </div>
    );
  }
}
export default withRouter(Login);

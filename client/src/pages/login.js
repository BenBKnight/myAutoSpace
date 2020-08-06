import React, { Component } from "react";
import './login.css';
import API from "../utils/API";
import { withRouter } from "react-router-dom";
import { AuthContext } from "../utils/authContext";
import Navbar from '../components/Navbar copy';
import NavbarInput from '../components/NavbarInput';
import ActionBtn from '../components/ActionBtn';
import BulletPoint from '../components/BulletPoint';
import FormInputTwo from '../components/FormInputTwo';

import { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css";

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

  handleLogInSubmit = (e) => {
    e.preventDefault();
    console.log('hit');
    let user = {
      email: this.state.emailInput.trim(),
      password: this.state.passwordInput.trim()
    }
    if (!this.state.emailInput || !this.state.passwordInput) {
      store.addNotification({
        message: "Enter email and password!",
        type: "danger",
        insert: "top",
        container: "top-center",
        animationIn: ["animate__animated", "animate__shakeX"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 1500
        }
      });
      return;
    }
    console.log(user);
    API.loginUser(user)
      .then((res) => {
        console.log(res);
        this.props.history.push("/Members");
        store.addNotification({
          message: "logged-in",
          type: "success",
          insert: "top",
          container: "top-center",
          animationIn: ["animate__animated", "animate__bounceIn"],
          animationOut: ["animate__animated", "animate__bounceOut"],
          dismiss: {
            duration: 1500
          }
        });
      })
      .catch(err => {
        console.log(err);
        store.addNotification({
          message: "Wrong email or password!",
          type: "danger",
          insert: "top",
          container: "top-center",
          animationIn: ["animate__animated", "animate__shakeX"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 1500
          }
        });
      });
  };

  handleSignUpSubmit = event => {
    event.preventDefault();
    console.log('hit');
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
          <NavbarInput handleInputChange={this.handleInputChange} value={this.state.emailInput} name='username' type='email' label='Username' id="emailInput" />
          <NavbarInput handleInputChange={this.handleInputChange} value={this.state.passwordInput} name='password' type='password' label='Password' id="passwordInput" />
          <ActionBtn url='#' handleClick={this.handleLogInSubmit}>Login</ActionBtn>
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
            <ActionBtn url='#' handleClick={this.handleSignUpSubmit}>Sign Up</ActionBtn>
          </div>

          <div className='width40'>
            <BulletPoint src={require('../components/BulletPoint/img/wrenches.png')}>Keep track of the work you do on your vehicle</BulletPoint>
            <BulletPoint src={require('../components/BulletPoint/img/speedo.png')}>See upcoming maintenance needed to maintain your vehicle</BulletPoint>
            <BulletPoint src={require('../components/BulletPoint/img/chat.png')}>Connect with other vehicle owners and share information</BulletPoint>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Login);

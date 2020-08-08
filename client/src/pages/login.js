import React from "react";
import './login.css';
import API from "../utils/API";
import { withRouter } from "react-router-dom";
import { AuthContext } from "../utils/authContext";
import { useState } from "react";
import { useContext } from "react";
import Navbar from '../components/Navbar copy';
import NavbarInput from '../components/NavbarInput';
import ActionBtn from '../components/ActionBtn';
import BulletPoint from '../components/BulletPoint';
import FormInputTwo from '../components/FormInputTwo'


function Login(props) {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useContext(AuthContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [location, setLocation] = useState("");

  const handleLogInSubmit = (e) => {
    e.preventDefault();
    console.log('hit');
    let user = {
      email: emailInput.trim(),
      password: passwordInput.trim()
    }
    if (!emailInput || !passwordInput) {
      return;
    }
    API.loginUser(user)
      .then(resData => {
        console.log(resData.data)
        setUserId({
          ...userId,
          id: resData.data.id,
          firstName: resData.data.firstName,
          lastName: resData.data.lastName,
          token: resData.data.token
        })
        props.history.push("/Members")
      })
      .catch(err => {
        console.log(err);
      })
  };

  const handleSignUpSubmit = event => {
    event.preventDefault();
    let user = {
      email: email.trim(),
      password: password.trim(),
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      location: location.trim()
    }
    if (!email || !password) {
      return;
    }
    console.log(user)
    API.signUp(user)
      .then(resData => {
        console.log(resData)
        setUserId({ id: resData.data.id })
        props.history.push("/Members")
      })
      .catch(err => {
        console.log(err);
      })
  };
  // const handleSignUpErr = (err) => {
  //   alert(err);
  // };

  const handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    if (name === "emailInput") {
      setEmailInput(value);
    }
    if (name === "passwordInput") {
      setPasswordInput(value)
    }
    if (name === "email") {
      setEmail(value)
    }
    if (name === "password") {
      setPassword(value)
    }
    if (name === "firstName") {
      setFirstName(value)
    }
    if (name === "lastName") {
      setLastName(value)
    }
    if (name === "location") {
      setLocation(value)
    }
    if (!email || !password) {
      return;
    }
  };


  return (
    <div>
      <Navbar>
        <NavbarInput handleInputChange={handleInputChange} value={emailInput} name='emailInput' type='emailInput' label='Username' id="emailInput" />
        <NavbarInput handleInputChange={handleInputChange} value={passwordInput} name='passwordInput' type='password' label='Password' id="passwordInput" />
        <ActionBtn url='#' handleClick={handleLogInSubmit}>Login</ActionBtn>
      </Navbar>
      <h1 className='mainHeader'>MyCarSpace</h1>
      <br></br>
      <div className='signInFlex'>

        <div className='signUpWrapper'>
          <h1 className='signUpHeader'>Become a car owner</h1>
          <h1 className='signUpHeader'>not just a driver</h1>
          <span className='flex'>
            <FormInputTwo handleInputChange={handleInputChange} value={firstName} setWidth='width40' name='firstName' type='firstName' label='First Name' id='firstName'></FormInputTwo>
            <FormInputTwo handleInputChange={handleInputChange} value={lastName} setWidth='width40' name='lastName' type='lastName' label='Last Name' id='lastName'></FormInputTwo>
          </span>
          <FormInputTwo handleInputChange={handleInputChange} value={email} setWidth='width100' name='email' type='email' label='Email' id='email'></FormInputTwo>
          <FormInputTwo handleInputChange={handleInputChange} value={password} setWidth='width100' name='password' type='password' label='Password' id='password'></FormInputTwo>
          <FormInputTwo handleInputChange={handleInputChange} value={location} setWidth='width100' name='location' type='location' label='Location' id='location'></FormInputTwo>
          <ActionBtn url='#' handleClick={handleSignUpSubmit}>Sign Up</ActionBtn>
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

export default withRouter(Login);

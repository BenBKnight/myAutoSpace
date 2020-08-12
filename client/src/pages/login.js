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
import ImageUpload from '../components/imageUpload/imageUpload';
import { app } from "../utils/base";
import { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css";
const db = app.firestore();

function Login(props) {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useContext(AuthContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [location, setLocation] = useState("");
  const [imageUrl, setImageUrl] = React.useState(null);
  const [percentage, setPercentage] = useState(0);

  // console.log("authContex:" + JSON.stringify(userId));

  const handleLogInSubmit = (e) => {
    e.preventDefault();
    // console.log('hit');
    let user = {
      email: emailInput.trim(),
      password: passwordInput.trim()
    }
    if (!emailInput || !passwordInput) {
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
    API.loginUser(user)
      .then(resData => {
        // console.log(resData.data)
        setUserId({
          ...userId,
          id: resData.data.id,
          firstName: resData.data.firstName,
          lastName: resData.data.lastName,
          token: resData.data.token,
          imageUrl: imageUrl
        })
        props.history.push("/Members");
        store.addNotification({
          message: "Logged-in",
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
        switch (err.message) {
          case "Request failed with status code 401":
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
            break;
          case "Network Error":
            store.addNotification({
              message: "No internet!",
              type: "danger",
              insert: "top",
              container: "top-center",
              animationIn: ["animate__animated", "animate__shakeX"],
              animationOut: ["animate__animated", "animate__fadeOut"],
              dismiss: {
                duration: 1500
              }
            });
            break;
        }
      });
  };

  const handleSignUpSubmit = async event => {
    event.preventDefault();
    let user = {
      email: email.trim(),
      password: password.trim(),
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      location: location.trim(),
      imageUrl: imageUrl
    }
    if (!email || !password) {
      store.addNotification({
        message: "Please fill out all the required fields!",
        type: "warning",
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
    await db.collection("users").doc(firstName).set({
      email: email,
      firstName: firstName,
      lastName: lastName,
      image: imageUrl,
    });
    // console.log(user)
    API.signUp(user)
      .then(resData => {
        // console.log(resData)
        setUserId({ id: resData.data.id })
        props.history.push("/Members")
        store.addNotification({
          message: "Signed-up and logged-in",
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

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.name);
    let myVar = setInterval(myTimer, 1000);

    function myTimer() {
      if(percentage < 100){
      setPercentage(percentage => percentage + 10);
      } else clearInterval(myVar);
    }
    await fileRef.put(file);
    setImageUrl(await fileRef.getDownloadURL());
  }

  return (
    <div>
      <Navbar>
        <NavbarInput handleInputChange={handleInputChange} value={emailInput} name='emailInput' type='emailInput' label='Username' id="emailInput" />
        <NavbarInput handleInputChange={handleInputChange} value={passwordInput} name='passwordInput' type='password' label='Password' id="passwordInput" />
        <ActionBtn url='#' handleClick={handleLogInSubmit}>Login</ActionBtn>
      </Navbar>
      <h1 className='mainHeader'>MyAutoSpace</h1>
      <br></br>
      <div className='signInFlex'>

        <div className='signUpWrapper'>
          <h2 className='signUpHeader'>Stay Informed, Maintain and Show off Your Automobile</h2>
          <span className='flex'>
            <FormInputTwo handleInputChange={handleInputChange} value={firstName} setWidth='width40' name='firstName' type='firstName' label='First Name' id='firstName'></FormInputTwo>
            <FormInputTwo handleInputChange={handleInputChange} value={lastName} setWidth='width40' name='lastName' type='lastName' label='Last Name' id='lastName'></FormInputTwo>
          </span>
          <FormInputTwo handleInputChange={handleInputChange} value={email} setWidth='width100' name='email' type='email' label='Email' id='email'></FormInputTwo>
          <FormInputTwo handleInputChange={handleInputChange} value={password} setWidth='width100' name='password' type='password' label='Password' id='password'></FormInputTwo>
          <FormInputTwo handleInputChange={handleInputChange} value={location} setWidth='width100' name='location' type='location' label='Location' id='location'></FormInputTwo>
          <span>
          <label className='photoFileLabel'>Add Profile Image</label>
            <progress className="progress is-link" value={percentage} max="100">{percentage}%</progress>
            <ImageUpload onFileChange={onFileChange} />
          </span>
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

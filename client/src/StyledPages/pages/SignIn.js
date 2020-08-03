import React from 'react';
import './signIn.css';
import NavbarInput from '../components/NavbarInput';
import Navbar from '../components/Navbar';
import ActionBtn from '../components/ActionBtn';
import FormInput from '../components/FormInput'
import BulletPoint from '../components/BulletPoint';



class SignIn extends React.Component {

  state = {
    
  }

  render(){
    return (
      <>
      <Navbar>
        <NavbarInput name='username' type='text' label='Username'/>
        <NavbarInput name='password' type='password' label='Password'/>
        <ActionBtn url='/garage'>Login</ActionBtn>
      </Navbar>
      <h1 className='mainHeader'>MyCarSpace</h1>
      <br></br>
      <div className='signInFlex'>
        
        <div className='signUpWrapper'>
          <h1 className='signUpHeader'>Become a car owner</h1>
          <h1 className='signUpHeader'>not just a driver</h1>
          <span className='flex'>
            <FormInput setWidth='width40' name='firstName' type='text' label='First Name'></FormInput>
            <FormInput setWidth='width40' name='lastName' type='text' label='Last Name'></FormInput>
          </span>
          <FormInput setWidth='width100' name='email' type='text' label='Email'></FormInput>
          <FormInput setWidth='width100' name='password' type='text' label='Password'></FormInput>
          <FormInput setWidth='width100' name='location' type='text' label='Location'></FormInput>
          <ActionBtn>Sign Up</ActionBtn>
        </div>
        
        <div className='width40'>
          <BulletPoint src={require('../components/BulletPoint/img/wrenches.png')}>Keep track of the work you do on your vehicle</BulletPoint>
          <BulletPoint src={require('../components/BulletPoint/img/speedo.png')}>See upcoming maintenance needed to maintain your vehicle</BulletPoint>
          <BulletPoint src={require('../components/BulletPoint/img/chat.png')}>Connect with other vehicle owners and share information</BulletPoint>
        </div>
      </div>
      </>
    );
  }
}

export default SignIn;

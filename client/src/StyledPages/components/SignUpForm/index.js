import React from 'react';
import "./style.css";
import FormInput from '../FormInput';
import ActionBtn from '../ActionBtn';

class SignUpForm extends React.Component {

  state = {

  }


  render() {
    return (
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
    );
  }
}

export default SignUpForm;
import React from 'react';
import LogInBtn from "./LogInBtn";
import LogOutBtn from "./LogOutBtn";

class UserSignIn extends React.Component{

  state = {
    isLoggedIn : false
  }

  handleSignIn = () => {
    this.setState({
      isLoggedIn : true
    })
  }

  handleSignOut = () => {
    this.setState({
      isLoggedIn : false
    })
  }

  render(){
    return(
      <>
        {this.state.isLoggedIn 
          ? <LogOutBtn onClick = {this.handleSignOut}/>
          : <LogInBtn onClick = {this.handleSignIn}/>
        }
      </>
    )
  }

}

export default UserSignIn;
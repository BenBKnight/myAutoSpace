import React from 'react';
import "./style.css";

class Navbar extends React.Component {

  state = {

  }


  render() {
    return (
      <>
      <div className="navbar">
        {this.props.children}
      </div>
      <div className="navbarLine"></div>
      </>
    );
  }
}

export default Navbar;
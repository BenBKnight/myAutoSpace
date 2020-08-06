import React from 'react';
import "./style.css";
import { Link } from "react-router-dom";

class NavbarLink extends React.Component {

  state = {
      
  }


  render() {
    return (
      <div className="navLinkContainer">
        <Link to={this.props.url}>
          <p className="linkText">{this.props.children}</p>
        </Link>

        {this.props.active
          ? (<div className ="underline"></div>)
          : <div></div>
        }

      </div>
    );
  }
}

export default NavbarLink;
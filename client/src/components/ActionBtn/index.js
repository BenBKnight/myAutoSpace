import React from 'react';
import "./style.css";
import { Link } from "react-router-dom";


class ActionBtn extends React.Component {

  state = {

  }


  render() {
    return (
      <Link to={this.props.url}>
        <button className="actionBtn">{this.props.children}</button>
      </Link>
    );
  }
}

export default ActionBtn;
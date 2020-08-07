import React from 'react';
import { Link } from 'react-router-dom';
import "./style.css";


class ActionBtn extends React.Component {

  state = {

  }


  render() {
    return (
      <Link to={this.props.url}>
        <button className="actionBtn" onClick={this.props.handleClick}>{this.props.children}</button>
      </Link>
    );
  }
}

export default ActionBtn;
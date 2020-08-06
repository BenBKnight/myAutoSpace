import React from 'react';
import "./style.css";


class NavbarInput extends React.Component {
  
  nameProp = this.props.name;

  state = {
    labelClasses: 'floatingLabel',
    name : this.props.name,
    value: ''
  }

  handleInputChange = e => {
    e.preventDefault();
    const val = e.target.value;
    this.setState({
      value: val
    });
  }

  render() {
    return (
      <div className="navInputWrapper">
        <input 
          type={this.props.type} 
          className="navInput" 
          name={this.props.name}
          value={this.props.value} 
          placeholder = {this.props.label}
          onChange={this.props.handleInputChange}
          id={this.props.id}
        />
      </div>
    );
  }
}

export default NavbarInput;
import React from 'react';
import "./style.css";


class FormInput extends React.Component {

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

  toggleFocus = () => {
    if(this.state.value){
      this.setState({labelClasses: 'floatingLabel floatingLabelFocus'})
    } 
    else if(this.state.labelClasses === 'floatingLabel'){
      this.setState({labelClasses: 'floatingLabel floatingLabelFocus'})
    } 
    else{
      this.setState({labelClasses: 'floatingLabel'});
    }
  }

  render() {
    return (
      <div className={this.props.setWidth}>
        <span className={this.state.labelClasses}>{this.props.label}</span>
        <input 
          type={this.props.type} 
          className="inputText"
          name={this.props.name}
          value={this.state.value} 
          onFocus={this.toggleFocus} 
          onBlur={this.toggleFocus}
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default FormInput;
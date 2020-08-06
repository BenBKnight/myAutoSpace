import React from 'react';
import "./style.css";


class FormInputTwo extends React.Component {

  state = {
    labelClasses: 'floatingLabel',
  }

  toggleFocus = () => {
    if(this.props.value){
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
          value={this.props.value} 
          onFocus={this.toggleFocus} 
          onBlur={this.toggleFocus}
          onChange={this.props.handleInputChange}
          id={this.props.id}
        />
      </div>
    );
  }
}

export default FormInputTwo;
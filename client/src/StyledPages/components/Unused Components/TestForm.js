import React from 'react';

class TestForm extends React.Component {
  state = {
    id : '',
    name : '',
    occupation : 'Starship Captain'
  }

  generateKey = () => {
    return `${ new Date().getTime() }`;
  }

  handleInputChange = e => {
    e.preventDefault();
    const name = e.target.name;
    const val = e.target.value;

    this.setState({
      [name]: val
    });
  }

  handleFormSubmit = e  => {
    e.preventDefault();
    const person = {
      id : this.generateKey(),
      name : this.state.name,
      occupation : this.state.occupation
    }
    this.props.submitPerson(person);
  }

  render(){
    return(
      <form onSubmit = {this.handleFormSubmit}>
        <label>
          Person Name:
          <input 
            name = "name" 
            type = "text" 
            value = {this.state.name} 
            placeholder = "eg. Marsha Brady" 
            onChange = {this.handleInputChange}>
          </input>
        </label>
        <br></br>
        <label>
          Occupation:
          <select name = "occupation" value = {this.state.occupation} onChange = {this.handleInputChange}>
            <option>Starship Captain</option>
            <option>Beef Plunger</option>
            <option>Circle</option>
          </select>
        </label>
        <br></br>
        {/* <input type = "file"/> */}
        <br></br>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default TestForm;
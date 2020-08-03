import React from 'react';

class CopyForm extends React.Component {

  handleCopyChange = (e) => {
    this.props.onCopyChange(e.target.value)
  };
  
  render() {
    return (
      <form>
        <label>
          {this.props.title}
          <input value={this.props.copyValue} onChange={this.handleCopyChange}></input>
        </label>
      </form>
    );
  }
}

export default CopyForm;
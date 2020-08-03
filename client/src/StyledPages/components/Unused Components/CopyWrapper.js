import React from 'react';
import CopyForm from './CopyForm'

class CopyWrapper extends React.Component{
  state = {
    copyValue : 'test'
  }


  onCopyChange = (value) => {
    this.setState({
      copyValue : value
    })
    console.log(this.state.copyValue);
  }

  render(){
    return(
      <div>
        <CopyForm title = "Copy Top" copyValue = {this.state.copyValue} onCopyChange = {this.onCopyChange}/>
        <CopyForm title = "Copy Bottom" copyValue = {this.state.copyValue} onCopyChange = {this.onCopyChange}/>
      </div>
    );
  }
}

export default CopyWrapper;
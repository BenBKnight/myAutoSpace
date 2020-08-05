import React from 'react';
import "./style.css";


class FormImg extends React.Component {
  

  state = {

  }

  render() {
    return (
      this.props.active
        ? (
            <div>
              <img id={this.props.id} data-field={this.props.dataField} data-value={this.props.dataValue} src={require(`../FormImg/img/${this.props.srcActive}`)} alt='test img' className='carFormImg' onClick={this.props.handleSelectionClick}/>
              <div className ="carFormLine"></div>
              <p className='imgNameText'>{this.props.imgName}</p>
            </div>
          )
        : (
            <img id={this.props.id} data-field={this.props.dataField} data-value={this.props.dataValue} src={require(`../FormImg/img/${this.props.src}`)} alt='test img' className='carFormImg' onClick={this.props.handleSelectionClick}/>
          )
        
    );
  }
}

export default FormImg;
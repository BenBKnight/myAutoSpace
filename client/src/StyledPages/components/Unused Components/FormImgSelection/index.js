import React from 'react';
import "./style.css";
import FormImg from '../../FormImg';


class FormImgSelection extends React.Component {
  

  state = {

  }

  render() {
    return (
      <div className="carFormInputWrapper">
        <FormImg src={require('../FormImg/img/car_gray.png')} srcActive={require('../FormImg/img/car_blue.png')} imgName='Car' active={true}></FormImg>
        <FormImg src={require('../FormImg/img/truck_gray.png')} srcActive={require('../FormImg/img/truck_blue.png')} imgName='Truck'></FormImg>
        <FormImg src={require('../FormImg/img/bike_gray.png')} srcActive={require('../FormImg/img/bike_blue.png')} imgName='Motorcycle'></FormImg>
      </div>
    );
  }
}

export default FormImgSelection;
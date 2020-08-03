import React from 'react';
import "./style.css";


function CarInfoSidebar(props) {
  return (
    <div className='carInfoSidebar'>
      <img className='carAvatar' src={require('./img/car_gray.png')} alt='Profile'/>
      <p className='carBoxText'>Year: {props.carYear}</p>
      <p className='carBoxText'>Milage: {props.carMilage}</p>
      <p className='carBoxText'>Vin: {props.carVin}</p>
    </div>
  );
}

export default CarInfoSidebar;
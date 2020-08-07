import React from 'react';
import "./style.css";


function CarInfoSidebar(props) {
  return (
    <div className='carInfoSidebar'>
      <img className='carAvatar' src={require('./img/car_gray.png')} alt='Profile'/>
      <p className='carBoxText'>Year: {props.vehicle.year}</p>
      <p className='carBoxText'>Milage: {props.vehicle.mileage}</p>
      <p className='carBoxText'>Vin: {props.vehicle.vin}</p>
    </div>
  );
}

export default CarInfoSidebar;
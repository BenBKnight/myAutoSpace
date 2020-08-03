import React from 'react';
import "./style.css";
import { Link } from "react-router-dom";



function CarInfoBox(props) {
  return (
    <div className='carInfoBox'>
      <span className='carBoxTopInfo'>
      <img className='carBoxImg' src={require('../FormImg/img/car_gray.png')} alt='Vehicle'/>
      <div>
        <h2 className='carBoxTitle'>Title{props.carYear} {props.carMake} {props.carModel}</h2>
        <br></br>
        <p className='carBoxText'>Milage: {props.carMilage}</p>
        <p className='carBoxText'>Vin: {props.carVin}</p>
      </div>
      </span>
      <br></br>
      <span className='carBoxMoreInfo'>
      <div>
        <p className='carBoxText'>Last Oil Change: {props.carOil}</p>
        <p className='carBoxText'>Condition: {props.carCondition}</p>
        <p className='carBoxText'>Accidents: {props.carAccidents}</p>
      </div>
      <div className='carBoxLinkContainer'>
        <Link to='/vehicle'>
          <p className='carBoxLink'>View Vehicle</p>
        </Link>
        <p className='carBoxLink'>Update Milage</p>
        <Link to='/add-maintenance'>
          <p className='carBoxLink'>New Maintenance</p>
        </Link>
        <p className='carBoxLinkRed'>Delete</p>
      </div>
      </span>
    </div>
  );
}

export default CarInfoBox;
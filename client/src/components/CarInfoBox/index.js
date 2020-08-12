import React from 'react';
import "./style.css";
import { Link } from "react-router-dom";



function CarInfoBox(props) {
  // console.log("props");
  // console.log(props);
  return (
    <div className='carInfoBox'>
      <span className='carBoxTopInfo'>
      <img className='carBoxImg' src={props.vehicle.imageUrl} alt='Vehicle'/>
      <div>
        <h2 className='carBoxTitle'>{props.vehicle.year} {props.vehicle.make} {props.vehicle.model}</h2>
        <br></br>
        <p className='carBoxText'>Milage: {props.vehicle.mileage}</p>
        <p className='carBoxText'>Vin: {props.vehicle.vin}</p>
      </div>
      </span>
      <br></br>
      <span className='carBoxMoreInfo'>
        <div>
          <p className='carBoxText'>Last Oil Change: {props.vehicle.mileage}</p>
          <p className='carBoxText'>Condition: {props.vehicle.condition}</p>
          <p className='carBoxText'>Accidents: {props.vehicle.accidents}</p>
        </div>
        <div className='carBoxLinkContainer'>
          <Link to={`/vehicles/${props.vehicle.id}`}>
            <p className='carBoxLink'>View Vehicle</p>
          </Link>
          <p className='carBoxLink'>Update Milage</p>
          <Link to={`/NewMaintenance/${props.vehicle.id}`}>
            <p className='carBoxLink'>New Maintenance</p>
          </Link>
          <p className='carBoxLinkRed'>Delete</p>
        </div>
      </span>
    </div>
  );
}

export default CarInfoBox;
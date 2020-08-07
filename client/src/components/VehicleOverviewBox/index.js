import React from 'react';
import "./style.css";


function VehicleOverviewBox(props) {
  return (
    <div className='vehicleInfoBox'>
      <div className='vehicleBoxTopInfo'>
        <h2 className='vehicleBoxTitle'>Vehicle Overview</h2>
      </div>
      <br></br>
      <span className='vehicleBoxMoreInfo'>
      <div>
        <p className='vehicleBoxText'>Last Oil Change: {props.vehicle.mileage}</p>
        <p className='vehicleBoxText'>Condition: {props.vehicle.condition}</p>
        <p className='vehicleBoxText'>Accidents: {props.vehicle.accidents}</p>
      </div>
      </span>
    </div>
  );
}

export default VehicleOverviewBox;
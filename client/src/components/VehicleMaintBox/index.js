import React from 'react';
import "./style.css";


function VehicleOverviewBox(props) {
  return (
    <div className='vehicleInfoBox'>
      <div className='maintenanceDisplayTopInfo'>
        <h2 className='maintenanceDisplayTitle'>{props.header}</h2>
      </div>
      <br></br>
      {props.children}
    </div>
  );
}

export default VehicleOverviewBox;
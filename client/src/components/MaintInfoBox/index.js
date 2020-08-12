import React from 'react';
import "./style.css";


function MaintInfoBox(props) {
  return (
    <div className='maintInfoBox'>
      <span className='flex'>
        <img className='maintBoxImg' src={props.vehicle.imageUrl} alt='Vehicle'/>
        <div>
          <h2 className='maintBoxTitle'>{props.vehicle.year} {props.carMake} {props.carModel}</h2>
          <br></br>
          <p className='maintBoxText'>Milage: {props.carMilage}</p>
          <p className='maintBoxText'>Vin: {props.carVin}</p>
        </div>
      </span>
    </div>
  );
}

export default MaintInfoBox;
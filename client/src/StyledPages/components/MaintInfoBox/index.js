import React from 'react';
import "./style.css";


function MaintInfoBox(props) {
  return (
    <div className='maintInfoBox'>
      <span className='flex'>
        <img className='maintBoxImg' src={require('../FormImg/img/car_gray.png')} alt='Vehicle'/>
        <div>
          <h2 className='maintBoxTitle'>{props.carYear} {props.carMake} {props.carModel}</h2>
          <br></br>
          <p className='maintBoxText'>Milage: {props.carMilage}</p>
          <p className='maintBoxText'>Vin: {props.carVin}</p>
        </div>
      </span>
    </div>
  );
}

export default MaintInfoBox;
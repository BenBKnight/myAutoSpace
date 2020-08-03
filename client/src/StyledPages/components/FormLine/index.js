import React from 'react';
import "./style.css";


function FormLine(props) {

  let checkboxClass = `checkbox ${props.checkbox}`

  return (
      <span className='maintenanceDisplayMoreInfo'>
        <div className='formLineTitle'>
          <p className='formLineHeader'>{props.lineTitle}</p>
        </div>
        <div className='formLineSection'>
          <p className='formLineText'>{props.lineHeadOne}</p>
          <p className='formLineInput'>{props.lineValOne}</p>
        </div>
        <div className='formLineSection'>
          <p className='formLineText'>{props.lineHeadTwo}</p>
          <p className='formLineInput'>{props.lineValTwo}</p>
          <input className={checkboxClass} type='checkbox'/>
        </div>
      </span>
  );
}

export default FormLine;
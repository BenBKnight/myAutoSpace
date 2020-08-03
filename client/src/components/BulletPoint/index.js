import React from 'react';
import "./style.css";

function BulletPoint (props) {
  return (
    <div className="bulletWrapper">
      <img className='bulletImg' src={props.src} alt='test for now'/>
      <p className="bulletText">{props.children}</p>
    </div>
  );
}

export default BulletPoint;
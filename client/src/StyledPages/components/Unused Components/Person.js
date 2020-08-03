import React from 'react';

function Person(props) {
  return(
  <li>
  <hr></hr>
  <h1>Hi my name is {props.name}</h1>
  <h3>I work as a {props.occupation}</h3>
  <hr></hr>
  </li>
  );
}

export default Person;
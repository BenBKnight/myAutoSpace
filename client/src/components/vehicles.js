import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

function Vehicles(props) {
    console.log(props.vehicle.id)
    // let path = "/vehicles/" + props.vehicles.id;
    return (
        // <Router>
        <p>
            {props.vehicle.id}
        </p>
        // {/* <Link to={path}></Link> */}
        // </Router>
    )
}

export default Vehicles;
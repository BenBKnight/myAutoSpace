import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

function Vehicles(props) {
    let vehicleLink = "/vehicles/" + props.vehicle.id
    return (
        <div>
            <p>
                {/* <img id="vehicleButton" src="images/${vehicleName.toLowerCase()}.png"> */}
                {/* </a> */}
                {props.vehicle.id}
            </p>
            <Link to={vehicleLink} className="image is-is-5by4 mb-2 container is-clickable">
                clickHere
            </Link>

        </div>

    );

}


export default Vehicles;
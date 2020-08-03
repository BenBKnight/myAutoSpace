import React from "react";
import {
    Link
} from "react-router-dom";

// import "./style.css";

function Vehicles(props) {
    return (
        <div>
            <p>
                {/* <img id="vehicleButton" src="images/${vehicleName.toLowerCase()}.png"> */}
                {/* </a> */}
                {props.vehicle.id}
                Place Holder
            </p>
            <Link to={`/vehicles/${props.vehicle.id}`}> {props.vehicle.id}</Link>
        </div>

    );

}


export default Vehicles;
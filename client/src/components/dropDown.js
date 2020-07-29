import React from "react";

export default function DropDown(props) {
    return (
        <div className="container">
            <label htmlFor="yearPurchased">Vehicle Condition:</label>
            <br />
            <div className="select" onChange={props.handleSelect}>
                <select id={props.id}>
                    {props.options.map(choice => (
                        <option value={choice} key={choice}>{choice}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}
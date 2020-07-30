import React from "react";
// import "./style.css";

export default function DropDown(props) {
    return (
        <div className="container">
            <label htmlFor="yearPurchased">{props.title}</label>
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
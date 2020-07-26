import React from "react";

function FormInput(props) {
    // console.log(props)
    return (
        <div className="field form-group">
            <label className="label" htmlFor={props.htmlFor}>{props.childeren}</label>
            <input onChange={props.handleInputChange} value={props.value} type={props.type} className="input form-control" id={props.id} placeholder={props.placeholder} />
        </div>
    )
}

export default FormInput;
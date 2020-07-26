import React from "react";

function FormInputButton(props) {
    return (
        <div className="container">
            <div>
                <button onClick={props.handleFormSubmit} type="submit" className="button loginInput btn btn-default" >{props.childeren}</button>
            </div>
        </div>
    );
};

export default FormInputButton;


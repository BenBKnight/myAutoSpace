import React from "react";
// import "./style.css";

function Card(props) {
    return (
        <div id={props.id}>
            <div className="is-parent box vehicle-style">
                <div className="container">
                    <h2 className="title is-underlined">
                        {/* Title Information Displays here */}
                        {props.title}
                    </h2>
                </div>
                <div {...props}>
                    {/* Children Components display Here */}
                </div>
            </div>
        </div>

    )
}

export default Card;
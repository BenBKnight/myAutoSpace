import React from "react";

function Card(props) {
    // console.log(props)
    return (
        <div className={`container${props.fluid ? "-fluid" : ""}`} {...props} >
            <div className="is-parent box vehicle-style">
                <div className="container">
                    <h2 className="title is-underlined">{props.title}</h2>
                </div>
            </div>
        </div>

    )
}

export default Card;
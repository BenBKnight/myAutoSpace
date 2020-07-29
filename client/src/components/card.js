import React from "react";

function Card(props) {
    return (
        <div >
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
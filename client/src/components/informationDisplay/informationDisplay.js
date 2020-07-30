import React from 'react';

function InformationDisplay(props) {
    return (
        <p className={props.className}>
            {props.label}
            <span>{props.value}</span>
        </p>
    );
}

export default InformationDisplay;
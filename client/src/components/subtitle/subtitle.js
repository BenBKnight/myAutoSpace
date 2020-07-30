import React from 'react';
// import "./style.css";

function Subtitle(props) {
    return (
        <h2 className={props.className}>{props.value}</h2>
    );
}

export default Subtitle;
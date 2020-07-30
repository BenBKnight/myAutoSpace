import React from 'react';

function Subtitle(props) {
    return (
        <h2 className={props.className}>{props.value}</h2>
    );
}

export default Subtitle;
import React from 'react';

function Header(props) {
    return (
        <h1 className={props.className}>{props.value}</h1>
    );
}

export default Header;
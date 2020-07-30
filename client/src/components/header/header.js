import React from 'react';
// import "./style.css";

function Header(props) {
    return (
        <h1 className={props.className}>{props.value}</h1>
    );
}

export default Header;
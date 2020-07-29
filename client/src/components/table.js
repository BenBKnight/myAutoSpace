import React from 'react';

function Table(props) {
    let help = function () {
        console.log(props.headers)
    }
    help()
    return (

        <table className="table" >
            <thead className="thead-dark">
                <tr>
                    {props.headers.map(headers => (
                        <th key={headers}>{headers}</th>
                    ))}
                </tr>
            </thead>
            <tbody>


                <tr>Holder of Place</tr>
                <tr>Holder of Place</tr>
                <tr>Holder of Place</tr>
                <tr>Holder of Place</tr>
                <tr>Holder of Place</tr>
                <tr>Holder of Place</tr>
            </tbody>
        </table >
    );
}

export default Table;
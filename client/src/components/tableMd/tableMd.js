import React from 'react';
// import "./style.css";


function TableMd(props) {
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
                {props.tableData.data.map((data, index) => (
                    <tr key={index}>
                        <td>{data.desc}</td>
                        <td>{data.due_mileage}</td>
                        <td>PlaceHolder</td>
                        <td>PlaceHolder</td>
                    </tr>
                ))}
            </tbody>
        </table >
    );
}

export default TableMd;
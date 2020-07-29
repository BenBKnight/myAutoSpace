import React from 'react';

function TableMaint(props) {
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
                {props.tableData.map(data => (
                    <tr key={data.id}>
                        <td>{data.name}</td>
                        <td>{data.milage}</td>
                        <td>{data.jobDate}</td>
                        <td>PlaceHolder</td>
                    </tr>
                ))}
            </tbody>
        </table >
    );
}

export default TableMaint;
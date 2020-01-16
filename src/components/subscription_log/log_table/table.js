import React from 'react';
import Table from 'react-bootstrap/Table';

const LogTable = ({title, data}) => {
    // debugger;
    const tableBody = Object.keys(data).map((label, idx) => {
        return(
            <tr key={`logTable-${idx}`}>
                <td colSpan="3">{label}</td>
                <td >{`${data[label]}`}</td>
            </tr>
        )
    });

    return(
        <Table borderless responsive>
            <thead>
            <tr>
                <th colSpan="8" >{title}</th>
            </tr>
            </thead>
            <tbody>{tableBody}</tbody>
        </Table>
    )
};

export default LogTable
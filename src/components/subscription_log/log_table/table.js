import React from 'react';
import Table from 'react-bootstrap/Table';
import styles from './table.module.css';

const LogTable = ({title, data}) => {
    const tableBody = Object.keys(data).map((label, idx) => {
        return(
            <tr key={`logTable-${idx}`}>
                <td colSpan="3">{label}</td>
                <td >{`${data[label]}`}</td>
            </tr>
        )
    });

    return(
        <Table borderless className={styles.table}>
            <thead>
                <tr>
                    <th className={styles.center} colSpan="12" >{title}</th>
                </tr>
            </thead>
            <tbody>{tableBody}</tbody>
        </Table>
    )
};

export default LogTable
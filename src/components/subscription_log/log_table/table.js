import React from 'react';
import classNames from 'classnames';
import Table from 'react-bootstrap/Table';
import styles from './table.module.css';

const LogTable = ({title, data, diff}) => {
    const tableBody = Object.keys(data).map((label, idx) => {
        return(
            <tr key={`logTable-${idx}`}>
                <td colSpan="3">{label}</td>
                <td className={classNames({[styles.green]: diff.includes(label)})}>{`${data[label]}`}</td>
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
import React from 'react';
import classNames from 'classnames';
import {capitalize} from 'lodash';
import Table from 'react-bootstrap/Table';
import styles from './table.module.css';

const LogTable = ({title, data, diff}) => {
    const tableBody = Object.keys(data)
        .filter(label => label !== 'name')
        .map((label, idx) => {
            let value = `${capitalize(data[label])}`;
            return(
                <tr key={`logTable-${idx}`}>
                    <td colSpan="3">{capitalize(label)}</td>
                    <td className={classNames({[styles.green]: diff.includes(label)})}>{value}</td>
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
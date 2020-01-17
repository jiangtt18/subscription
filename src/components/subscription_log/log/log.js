import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import {isEqual} from 'lodash';
import Card from '../../card/card';
import {subCost} from "../../../data/stored_subscription";
import LogTable from '../log_table/table';
import ButtonTemplate from "../../buttons/button";
import styles from './log.module.css';

export const Log = (props) => {
    const goBack = () => {
        props.history.goBack();
        props.handlers.updatePrevState();
    };

    const shouldShow = (prev, updated) => (!isEqual(prev, updated));

    const diff = (prev, updated) => {
        return Object.keys(prev).filter((k) => (updated[k] !== prev[k]))
    };

    const tables = Object.keys(props.curSubs)
        .filter((type) => {
            const prev = props.curSubs[type];
            const updated = props.updatedSubs[type];
            return shouldShow(prev, updated);
        })
        .map((type, idx) => {
            const prev = props.curSubs[type];
            const {cost, currency} = subCost[type][prev.plan];
            const price = {price: `${currency} ${parseInt(prev.seats ) * cost}`};
            let prevData = {...prev, ...price}
            const updated = props.updatedSubs[type];
            const {cost:newCost, currency:newCurrency} = subCost[type][updated.plan];
            const newPrice = {price: `${newCurrency} ${parseInt(updated.seats ) * newCost}`};
            let updatedData = {...updated, ...newPrice};
            return(
                <Card key={`logTable-${idx}`} className={styles.log}>
                    <LogTable title='Previous Subscription' data={prevData} diff={[]}/>
                    <LogTable title='Updated Subscription' data={updatedData} diff={diff(prevData, updatedData)}/>
                </Card>
            )
        });

    return(
        <Jumbotron fluid>
            {tables}
            <div className={styles.button}><ButtonTemplate onClick={goBack} variant={'success'}>Back</ButtonTemplate></div>
        </Jumbotron>

    )
};
import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import {isEqual} from 'lodash';
import Card from '../../card/card';
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

    const tables = Object.keys(props.curSubs).map((type, idx) => {
        const prev = props.curSubs[type];
        const updated = props.updatedSubs[type];
        if(shouldShow(prev, updated)){
            return(
                <Card key={`logTable-${idx}`} className={styles.log}>
                    <LogTable title='Previous Subscription' data={prev} diff={[]}/>
                    <LogTable title='Updated Subscription' data={updated} diff={diff(prev, updated)}/>
                </Card>
            )
        }
    });
    return(
        <Jumbotron fluid>
            {tables}
            <div className={styles.button}><ButtonTemplate onClick={goBack}>Back</ButtonTemplate></div>
        </Jumbotron>

    )
};
import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from '../../card/card'
import LogTable from '../log_table/table';
import ButtonTemplate from "../../buttons/button";
import styles from './log.module.css'

export const Log = (props) => {
    const goBack = () => {
        props.history.goBack();
    };

    const tables = Object.keys(props.curSubs).map((type, idx) => {
        return(
            <Card className={styles.log}>
                <LogTable title='Previous Subscription' data={props.curSubs[type]}/>
                <LogTable title='Updated Subscription' data={props.updatedSubs[type]}/>
            </Card>
        )
    });
    return(
        <Jumbotron fluid>
            {tables}
            <div className={styles.button}><ButtonTemplate onClick={goBack}>Back</ButtonTemplate></div>
        </Jumbotron>

    )
};
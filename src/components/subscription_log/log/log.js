import React, {Component} from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import {isEqual} from 'lodash';
import Card from '../../card/card';
import {subCost} from "../../../data/stored_subscription";
import LogTable from '../log_table/table';
import ButtonTemplate from "../../buttons/button";
import styles from './log.module.css';

class Log extends Component {
    constructor(props){
        super(props);
        this.state = {
            prev_subs: {},
        }
    }

    goBack = () => {
        this.props.history.goBack();
        this.props.handlers.updatePrevState();
    };

    shouldShow = (prev, updated) => (!isEqual(prev, updated));

    diff = (prev, updated) => {
        return Object.keys(prev).filter((k) => (updated[k] !== prev[k]))
    };

    tables = Object.keys(this.props.curSubs)
        .filter((type) => {
            const prev = this.props.curSubs[type];
            const updated =this. props.updatedSubs[type];
            return this.shouldShow(prev, updated);
        })
        .map((type, idx) => {
            const prev = this.props.curSubs[type];
            const {cost, currency} = subCost[type][prev.plan];
            const price = {price: `${currency} ${parseInt(prev.seats ) * cost}`};
            let prevData = {...prev, ...price};
            const updated = this.props.updatedSubs[type];
            const {cost:newCost, currency:newCurrency} = subCost[type][updated.plan];
            const newPrice = {price: `${newCurrency} ${parseInt(updated.seats ) * newCost}`};
            let updatedData = {...updated, ...newPrice};
            return(
                <Card key={`logTable-${idx}`} className={styles.log}>
                    <LogTable title='Previous Subscription' data={prevData} diff={[]}/>
                    <LogTable title='Updated Subscription' data={updatedData} diff={this.diff(prevData, updatedData)}/>
                </Card>
            )
        });

    render(){
        return(
            <Jumbotron fluid>
                {this.tables}
                <div className={styles.button}><ButtonTemplate onClick={this.goBack} variant={'success'}>Back</ButtonTemplate></div>
            </Jumbotron>

        )
    }

};

export default Log;
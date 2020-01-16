import React from 'react';
import {Table} from '../log_table/table'

export const Log = (props) => {
    const goBack = () => {
        props.history.goBack();
    };
    return(
        <div>
            <Table />
            <button onClick={goBack}>back</button>
        </div>

    )
};
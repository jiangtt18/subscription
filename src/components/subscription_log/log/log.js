import React from 'react';
import LogTable from '../log_table/table'

export const Log = (props) => {
    const goBack = () => {
        props.history.goBack();
    };

    const tables = Object.keys(props.curSubs).map((type, idx) => {
        // debugger;
        return(
            <div>
                <LogTable title='Previous Subscription' data={props.curSubs[type]}/>
                <LogTable title='Updated Subscription' data={props.updatedSubs[type]}/>
            </div>
        )
    });
    return(
        <div>
            {tables}
            <button onClick={goBack}>back</button>
        </div>

    )
};
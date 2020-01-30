import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import {isEqual} from 'lodash';
import Subscription from '../components/App';
import Log from '../components/subscription_log/log/log';
import {curSubs} from "../data/stored_subscription";

class Routes extends Component {
    constructor(props){
        super(props);

        this.state = {
            curSubs: curSubs,
            updatedSubs: curSubs,
            shouldUpdate: false,
            prevSubs:{},
        };

        this.handlers = {
            onProductChange: this.onProductChange,
            updatePrevState: this.updatePrevState
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            prevSubs: prevState
        }

    }

    updatePrevState = () => {
        this.setState({curSubs: this.state.updatedSubs, shouldUpdate: false})
    };

    onProductChange = (type, newValues) => {
        let originalValue = this.state.curSubs[type];
        let prevValues = this.state.updatedSubs[type];
        let updatedValues = {...prevValues, ...newValues};
        let shouldUpdate = !(isEqual(originalValue, updatedValues));
        let newSubs = Object.assign({}, this.state.updatedSubs);
        newSubs[type] = updatedValues;
        this.setState({shouldUpdate: shouldUpdate , updatedSubs: newSubs})
    };

    render(){
        const {curSubs, updatedSubs, shouldUpdate, prevSubs} = this.state;
        return (
            <Router>
                <div>
                    <Switch>
                        <Redirect exact from='/' to='/subscription/dashboard'/>
                        <Route
                            path='/subscription/dashboard'
                            component={({history, match}) => <Subscription
                                                                curSubs={prevSubs}
                                                                updatedSubs={updatedSubs}
                                                                shouldUpdate={shouldUpdate}
                                                                handlers={this.handlers}
                                                                match={match}
                                                                history={history}
                                                             />
                            }
                        />
                        <Route
                            path='/subscription/summary'
                            component={({history, match}) => <Log
                                curSubs={curSubs}
                                updatedSubs={updatedSubs}
                                handlers={this.handlers}
                                match={match}
                                history={history}
                            />}
                        />
                    </Switch>
                </div>
            </Router>
        );
    }
};

export default Routes;
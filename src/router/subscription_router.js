import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Subscription from '../App';
import {Log} from '../components/subscription_log/log/log'
import {curSubs} from "../data/stored_subscription";

class Routes extends Component {
    constructor(props){
        super(props);

        this.state = {
            curSubs: curSubs,
            updatedSubs: curSubs,
            shouldUpdate: false,
        };

        this.handlers = {
            onProductChange: this.onProductChange,
            updatePrevState: this.updatePrevState
        }
    }

    updatePrevState = () => {
        this.setState({curSubs: this.state.updatedSubs, shouldUpdate: false})
    };

    onProductChange = (type, newValues) => {
        let oldValues = this.state.updatedSubs[type];
        const {plan, seats} = oldValues;
        const {plan: newPlan = plan, seats: newSeats = seats } = newValues;
        if(newPlan === plan && parseInt(seats) === parseInt(newSeats)) {
            this.setState({shouldUpdate: false});
            return;
        }

        const newSubs = Object.assign({}, this.state.updatedSubs);
        newSubs[type] = {...oldValues, ...newValues};
        this.setState({shouldUpdate: true , updatedSubs: newSubs})
    };

    render() {
        const {curSubs, updatedSubs, shouldUpdate} = this.state;
        return (
            <Router>
                <div>
                    <Switch>
                        <Redirect exact from='/' to='/subscription/dashboard'/>
                        <Route
                            path='/subscription/dashboard'
                            component={({history, match}) => <Subscription
                                                                curSubs={curSubs}
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
import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Subscription from '../App';
import {Log} from '../components/subscription_log/log/log'
const Routes = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Redirect exact from='/' to='/subscription/dashboard'/>
                    <Route
                        path ='/subscription/dashboard'
                        component={({ history, match }) => <Subscription match={match} history={history} />}
                    />
                    <Route
                        path ='/subscription/summary'
                        component={({ history, match }) => <Log match={match} history={history} />}
                     />
                </Switch>
            </div>
        </Router>

    );
};

export default Routes;
import React, {Component} from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Subscriptions from "./components/all_subscriptions/subscriptions/subscriptions";
import './App.css';

class Subscription extends Component {
    render(){
        return (
            <Jumbotron fluid>
                <Subscriptions/>
            </Jumbotron>
        );
    }

}

export default Subscription;

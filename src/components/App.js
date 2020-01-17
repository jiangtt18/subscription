import React, {Component} from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Subscriptions from "./all_subscriptions/subscriptions/subscriptions";
import './App.css';

class Subscription extends Component {
    constructor(props){
        super(props);
    }

    onSubmit = () => {
       this.props.history.push('/subscription/summary')
    };

    render(){
        return (
            <Jumbotron fluid>
                <Subscriptions onSubmit={this.onSubmit} {...this.props}/>
            </Jumbotron>
        );
    }

}

export default Subscription;

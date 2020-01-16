import React, {Component} from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Subscriptions from "./components/all_subscriptions/subscriptions/subscriptions";
import './App.css';

class Subscription extends Component {
    constructor(props){
        super(props);
    }

    handleBack = () => {
        this.props.history.goBack();
        this.setState({showLog: false})
    };

    onSubmit = () => {
       this.props.history.push('/subscription/summary')
    };

    render(){
        return (
            <Jumbotron fluid>
                <Subscriptions onSubmit={this.onSubmit}/>
            </Jumbotron>
        );
    }

}

export default Subscription;

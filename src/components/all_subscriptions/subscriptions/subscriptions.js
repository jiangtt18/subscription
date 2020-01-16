import React, {Component} from 'react';
import Card from '../../card/card';
import Button from 'react-bootstrap/Button'
import {curSubs, subCost} from '../../../data/stored_subscription'
import Item from '../subscription_items/item'

class Subscriptions extends Component {
     constructor(props){
        super(props);
        this.state = {
            curSubs: curSubs,
            updatedSubs: curSubs,
            shouldUpdate: false,
        }
    }

    onProductChange = (type, newValues) => {
         let oldValues = this.state.updatedSubs[type];
         const {plan, seats} = oldValues;
         const {plan: newPlan = plan, seats: newSeats = seats } = newValues;
         if(newPlan === plan && seats === newSeats) {
             this.setState({shouldUpdate: false});
             return;
         }

         const newSubs = Object.assign({}, this.state.updatedSubs);
         newSubs[type] = {...oldValues, ...newValues};
         this.setState({shouldUpdate: true , updatedSubs: newSubs})
    };

    render(){
        const {updatedSubs, shouldUpdate} = this.state;
        const {onSubmit} = this.props;
        const buttonVariant = shouldUpdate ?  "success" : "secondary";
        let subs = Object.keys(updatedSubs).map((product, idx) => {
            return(
                <Card>
                    <Item
                        key={`product-${idx}`}
                        productCost={subCost}
                        product={product}
                        productData={updatedSubs[product]}
                        onProductChange={this.onProductChange}
                    />
                </Card>
            )
         });
         return(
             <Card>
                 {subs}
                 <Button variant={buttonVariant} onClick={onSubmit}>Update Subscription</Button>
             </Card>
         )
    }
}

export default Subscriptions;
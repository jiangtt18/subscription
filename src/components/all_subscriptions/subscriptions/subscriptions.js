import React, {Component} from 'react';
import Card from '../../card/card';
import Button from 'react-bootstrap/Button'
import {subCost} from '../../../data/stored_subscription'
import Item from '../subscription_items/item'

class Subscriptions extends Component {
     constructor(props){
        super(props);

    }
    render(){
        const { updatedSubs, shouldUpdate, onSubmit, handlers:{onProductChange}} = this.props;
        const buttonVariant = shouldUpdate ?  "success" : "secondary";
        let subs = Object.keys(updatedSubs).map((product, idx) => {
            return(
                <Card>
                    <Item
                        key={`product-${idx}`}
                        productCost={subCost}
                        product={product}
                        productData={updatedSubs[product]}
                        onProductChange={onProductChange}
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
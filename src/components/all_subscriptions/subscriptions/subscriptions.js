import React, {Component} from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from '../../card/card';
import {subCost} from '../../../data/stored_subscription';
import Item from '../subscription_items/item';
import ButtonTemplate from '../../buttons/button';
import styles from './subscription.module.css'

class Subscriptions extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const {updatedSubs, shouldUpdate, onSubmit, handlers:{onProductChange}} = this.props;
        const buttonVariant = shouldUpdate ?  "success" : "secondary";
        if(Object.keys(updatedSubs).length === 0){return <div>No subscription yet!</div>}
        let subs = Object.keys(updatedSubs).map((product, idx) => {
            return(
                <Card key={`subscriptions-${idx}`}>
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
                 <Row className={styles.button}>
                    <Col>
                        <ButtonTemplate variant={buttonVariant} onClick={onSubmit} disabled={!shouldUpdate}>
                            <div>Update Subscription</div>
                        </ButtonTemplate>
                    </Col>
                 </Row>
             </Card>
         )
    }
}

export default Subscriptions;
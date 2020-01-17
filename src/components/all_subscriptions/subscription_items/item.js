import React, {Component} from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import {capitalize} from 'lodash';

const plans = ['Basic', 'Premium', 'Limited'];

class Item extends Component{
    constructor(props){
        super(props);
    }

    dropdown = () => {
        const {product, productData, onProductChange} = this.props;
        const dropdownOptions =
            plans
                .filter(plan => plan !== productData.name)
                .map((plan, idx) => {
                    return (
                        <Dropdown.Item
                            key={`${idx}-dropdown`}
                            eventKey={plan}
                        >
                            {plan}
                        </Dropdown.Item>
                    )
                });

        return(
            <div>
                <DropdownButton
                    id="dropdown-basic-button"
                    title= {productData.name}
                    onSelect={(selected)=> {
                        onProductChange(product, {plan: selected.toLowerCase(), name: selected})
                    }}
                >
                    {dropdownOptions}
                </DropdownButton>
            </div>
        )
    };

    seats = () => {
        const {product, productData, onProductChange} = this.props;

        return(
            <div>
                <Form.Control
                    type="number" min="0"
                    onBlur={(e) => {onProductChange(product,{seats: parseInt(e.target.value || productData.seats)})}}
                    placeholder={productData.seats}
                />
            </div>
        )
    };

    price = () => {
        const {productCost, productData:{seats, type, plan}} = this.props;
        let curPlan = productCost[type][plan];
        let curPrice = parseInt(seats) * curPlan['cost'];
        let currency = curPlan['currency'];

        return(<div>{`${currency}${curPrice}`}</div>)
    };

    render(){
        const seats_count = this.props.productData.seats < 2 ? 'seat' : 'seats';

        return(
            <div>
                <Row >
                    <Col>{capitalize(this.props.product)}</Col>
                    <Col>{this.dropdown()}</Col>
                    <Col>{this.seats()}</Col>
                    <Col>{this.price()}</Col>
                </Row>
                <Row>
                    <Col>Product</Col>
                    <Col>Plan</Col>
                    <Col>{seats_count}</Col>
                    <Col>Price</Col>
                </Row>
            </div>
        )
    }
}

export default Item

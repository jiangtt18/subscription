import React, {Component} from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';

const plans = ['Basic', 'Premium', 'Limited'];

class Item extends Component{
    constructor(props){
        super(props);
        this.state = {
            plan:'',
            seats:0,
        }
    }

    dropdown = () => {
        const {product, productData, onProductChange} = this.props;
        const dropdownOptions = plans.map((plan, idx) => {
            if (plan !== productData.name){
                return(
                    <Dropdown.Item
                        key={`${idx}-dropdown`}
                        eventKey={plan}
                    >
                        {plan}
                    </Dropdown.Item>)
            }
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
                <label>Plans</label>
            </div>

        )
    };

    seats = () => {
        const {product, productData, onProductChange} = this.props;
        return(
            <div>
                <Form.Control
                    type="number" min="0"
                    onChange={(e) => {onProductChange(product,{seats: e.target.value})}}
                    placeholder={productData.seats}
                />
                <label>Seats</label>
            </div>
        )
    };

    price = () => {
        const {productCost, productData:{seats, type, plan}} = this.props;
        let curPlan = productCost[type][plan];
        let curPrice = parseInt(seats) * curPlan['cost'];
        let currency = curPlan['currency'];
        return(
            <div>
                {`${currency}${curPrice}`}
            </div>
        )
    };

    render(){
        return(
            <div>
                {this.props.product}
                {this.dropdown()}
                {this.seats()}
                {this.price()}
            </div>
        )
    }
}

export default Item

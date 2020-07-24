import React, { Component } from "react";

import CheckoutSummary from '../../components/Orders/CheckoutSummary/CheckoutSummary';
class Checkout extends Component {

    state = {
        ingredients : {
            salad: 1,
            meat: 2
        }
    }

    render() {
        return (

            <CheckoutSummary ingredients={this.state.ingredients} />
        );
    }
}

export default Checkout;
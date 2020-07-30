import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';
import classes from './ContactData.module.css';
import axios from '../../../axios-orders';

class ContactData extends Component {

    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    };

    orderHandler = (event) => {
        event.preventDefault();
        console.log(this.props.ingredients);

        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Salinda Hettiarachchi',
                address: {
                    street: '18, Glen avenue',
                    zipcode: 85237,
                    country: 'Sweden'
                },
                email: 'h.salinda@gmail.com'
            }
        }

        axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false });
                this.props.history.push('/');
                console.log(response);
            })
            .catch(error => {
                this.setState({ loading: false });
                console.log(error)
            });
    }

    render() {
        let form = (
            <form>
                <Input inputType="input" type="text" name="name" placeholder="Your Name" />
                <Input inputType="input" type="email" name="email" placeholder="Your Email" />
                <Input inputType="input" type="text" name="street" placeholder="Street" />
                <Input inputType="input" type="text" name="postalCode" placeholder="Postal Code" />
                <Button
                    btnType="Success"
                    clicked={this.orderHandler}>ORDER</Button>
            </form>
        );

        if (this.state.loading) {
            form = <Spinner />;
        }

        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;
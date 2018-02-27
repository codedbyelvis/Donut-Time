import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Button from '../Button';
import {connect} from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
// import REACT_APP_STRIPE_PUBLIC_KEY from '../../../';

export default class Cart extends Component {
    constructor(){
        super()
        this.state = {
            cart: []
        }
    }
    componentDidMount(){
        axios.get('/api/cart').then(({data}) => {
            this.setState({cart: data})
        })
    }

    
    render() {
        const {cart} = this.state
        console.log(cart.length);
        const displayCart = cart.map((donut,i)=>{
            return (
                <div key={i}>
                {donut.donut_name}
                {donut.donut_price}
                {cart.donut_amount}
                <img src={donut.donut_img}/>
                </div>
            )
        })
        return (
            <div className='Cart'> 
                {displayCart}
            </div> 
        )
    }
}


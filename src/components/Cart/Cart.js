import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Button from '../Button';
import {connect} from 'react-redux';
import {getUser, deleteCart} from '../../ducks/reducer';
import StripeCheckout from 'react-stripe-checkout';
import DonutTime from './donutStripe.jpg';
const stripePublicKey = process.env.REACT_APP_STRIPE_PUBLIC_KEY;

class Cart extends Component {
    constructor(props){
        super(props)
        this.state = {
            cart: [],
            token: null
        }
        
    this.stripeHandler = window.StripeCheckout.configure({
        key: stripePublicKey,
        token: this.onToken,
        amount: this.displayTotal,
        currency: 'usd',
        locale: 'auto',
        zipCode: true,
        name: 'Donut Time',
        description: 'Thank you for your purchase.',
        image: DonutTime,
      });
    }

    componentDidMount(){
        axios.get('/api/cart').then(({data}) => {
            this.setState({cart: data})
        })
        this.props.getUser();
        this.stripeHandler.close();
    }

    deleteDonut(){

    }
    
    onToken = token => {
        console.log('token', token);
        token.card = void 0;
        console.log(this.displayTotal)
        const amount = this.displayTotal;
        axios.post('/api/payment', { token, amount })
          .then(charge => { console.log('charge response', charge) });
      }

    onClickPay(e) {
        e.preventDefault();
        this.stripeHandler.open({});
      }
    
    render() {
        let buttonText = this.state.token ? 'Thank you!' : 'Checkout';
        const {cart} = this.state
        console.log(cart.length);
        const displayCart = cart.map((donut,i)=>{
            console.log(donut)
            return (
                <div key={i}>
                {donut.donut_name}
                {donut.donut_price}
                {donut.donut_amount}
                {/* <img src={donut.donut_img}/> */}
                </div>
            )})
        this.displayTotal = cart.reduce((s, v) => s + (v.donut_amount * v.donut_price),0)
                
        return (
            <div className='Cart'> 
            <div className={this.state.token ? "stripeButton disabled" : "stripeButton"}>
            <div onClick={this.state.token ? null : this.onClickPay.bind(this)}>
            <button>{buttonText}</button></div>
             {displayCart}
             ${this.displayTotal.toFixed(2)}
            {/* {displayCart}
                <StripeCheckout
                token={this.onToken}
                stripeKey={stripePublicKey}
                amount={this.state.amount} /> */}
            </div>
            </div> 
        )
    }
}

function mapStateToProps( state ) {
    return state;
  }
  
  export default connect( mapStateToProps, {getUser, deleteCart} )( Cart );
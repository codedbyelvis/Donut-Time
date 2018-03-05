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
          .then(charge => { 
              console.log('charge response', charge)
              if(charge.status===200){
                  this.props.deleteCart(this.props.user.user_id);
                this.setState({cart : []})
              } else {
                  alert("You're Broke")
              }
            });
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
        if(cart){
        return (
            <div className='Items' key={i}>
            <img className='CartImg' src={donut.donut_img}/>
            <p className='CartName'>{donut.donut_name}</p>
            <p className='CartPrice'>{donut.donut_price}</p>
            <p className='CartAmount'>{donut.donut_amount}</p>
            </div>
        )}else{
            console.log('asked',cart)
            return '';
        }
    })
        this.displayTotal = cart.reduce((s, v) => s + (v.donut_amount * v.donut_price),0)
                
        return (
            <div className='Cart'> 
            <div className='CartContainer'>  
            <h1 className='Checkout'>Checkout</h1>
            <p className='CartHeader1'>Donut</p>
            <p className='CartHeader2'>Price</p>
            <p className='CartHeader3'>Amount</p>
            <div className='PayButton' onClick={this.state.token ? null : this.onClickPay.bind(this)}>
            <button>{buttonText}</button></div>
             <p className='DisplayCart'>{displayCart}</p>
             <p className='CartTotal'>Total:{this.displayTotal.toFixed(2)}</p>
            <div className={this.state.token ? "stripeButton disabled" : "stripeButton"}>
        
            </div>
            </div> 
            </div> 
        )
    }
    
}

function mapStateToProps( state ) {
    return state;
  }
  
  export default connect( mapStateToProps, {getUser, deleteCart} )( Cart );
import React, { Component } from 'react';
import axios from 'axios';
import Button from '../Button';
import {addCart} from '../../ducks/reducer';
import {connect} from 'react-redux';


class Donut extends Component {

    constructor(props){
        super(props)
        this.state = {
            donut: {},
            amount: 0
        }
    }

    componentDidMount(){
        axios.get(`/api/donuts/${this.props.match.params.id}`).then(res => {
            this.setState({
                donut:res.data[0]
            },() =>console.log(this.state))
        })
    }

    render() {
        const {donut} = this.state;
        return (
            <div className='Donut'>  
            <div>
                    <img src={"http://unsplash.it/300/?random"} alt='' />
                    <h2>{donut.donut_name}</h2>
                    {donut.donut_price}
                    <p>{donut.donut_desc}</p>
                    {this.state.amount}
                </div>
             <Button className='single' fnc={() => this.setState({amount: this.state.amount +1})}>Single</Button>
             <Button className='half-dozen' fnc={() => this.setState({amount: this.state.amount +6})}>Half-Dozen</Button>
             <Button className='dozen' fnc={() => this.setState({amount: this.state.amount +12})}>Dozen</Button>
             
            <Button className='ADD' fnc={() => this.props.addCart(this.state.donut,this.state.amount) }>
                ADD
            </Button>
            
            </div> 
        )
    }
}

export default connect(null,{addCart})(Donut)
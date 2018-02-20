import React, { Component } from 'react';
import axios from 'axios';
import Button from '../Button';
import {addCart} from '../../ducks/users';
import {connect} from 'react-redux';


class Donut extends Component {

    constructor(props){
        super(props)
        this.state = {
            donut: [],
            amount: 0
        }
    }

    componentDidMount(){
        axios.get(`/api/donuts/${this.props.match.params.id}`).then(res => {
            this.setState({
                donut:res.data
            },() =>console.log(this.state))
        })
    }

    render() {
        let donutToDisplay = this.state.donut.map(val => {
            return(
                <div>
                    <img src={val.donut_img} />
                    <h2>{val.donut_name}</h2>
                    {val.donut_price}
                    <h3>{val.donut_desc}</h3>
                    {this.state.amount}
                </div>
            )
        })
        return (
            <div className='Donut'>  
            {donutToDisplay}
             <Button className='single' fnc={() => this.setState({amount: this.state.amount +1})}>Single</Button>
             <Button className='half-dozen' fnc={() => this.setState({amount: this.state.amount +6})}>Half-Dozen</Button>
             <Button className='dozen' fnc={() => this.setState({amount: this.state.amount +12})}>Dozen</Button>
             
            <Button className='ADD' fnc={() => this.props.addCart(this.state.donut[0]) }>
                ADD
            </Button>
            </div> 
        )
    }
}

export default connect(null,{addCart})(Donut)
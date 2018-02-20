import React, { Component } from 'react';
import axios from 'axios';
export default class Cart extends Component {

    componentDidMount(){
        axios.get('/api/donuts').then(res => {
            console.log(res)
        })
    }

    render() {
        return (
            <div className='Cart'>  

            </div> 
        )
    }
}


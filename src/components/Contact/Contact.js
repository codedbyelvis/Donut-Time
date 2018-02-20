import React, { Component } from 'react';
import axios from 'axios';
export default class Contact extends Component {

    componentDidMount(){
        axios.get('/api/donuts').then(res => {
            console.log(res)
        })
    }

    render() {
        return (
            <div className='Contact'>  

            </div> 
        )
    }
}


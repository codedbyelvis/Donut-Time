import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class Contact extends Component {

    render() {
        return (
            <div className='Contact'>
            <div className='ContactContainer'>
                <h1 className='ContactTitle'>Contact</h1>
                <h3 className='Call'>Call</h3>
                <p><a href="tel:5551234567" className='Phone'>(615)-965-2183</a></p>
                <h3 className='Facebooks'>Facebook</h3>
                <p><a href="https://www.facebook.com/pg/ItsDonutTime/" target="_blank" className='Facebook'>
                Donut Time</a></p>
                <h3 className='Twitter'>Twitter</h3>
                <p><a href="https://twitter.com/donuttime1" target="_blank" className='Handle'>
                @DonutTime1</a></p>
            </div> 
            </div> 
        )
    }
}


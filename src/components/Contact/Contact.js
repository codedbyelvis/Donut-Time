import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class Contact extends Component {

    render() {
        return (
            <div className='Contact'>  
                <h1>Contact</h1>
                <h3>Call</h3><p>(615)-965-2183</p>
                <h3><a class="btn btn-default" href="https://www.facebook.com/pg/ItsDonutTime/" target="_blank">Facebook</a></h3>
            </div> 
        )
    }
}


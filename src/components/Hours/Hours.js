import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class Hours extends Component {

    render() {
        return (
            <div className='Hours'> 
                <h1>Hours</h1> 
                <h3>Monday</h3><p>5:00 AM - 2:00 PM</p>
                <h3>Tuesday</h3><p>5:00 AM - 2:00 PM</p>
                <h3>Wednesday</h3><p>5:00 AM - 2:00 PM</p>
                <h3>Thursday</h3><p>5:00 AM - 2:00 PM</p>
                <h3>Friday</h3><p>5:00 AM - 2:00 PM</p>
                <h3>Saturday</h3><p>6:00 AM - 1:00 PM</p>
                <h3>Sunday</h3><p>6:00 AM - 1:00 PM</p>
                
            </div> 
        )
    }
}


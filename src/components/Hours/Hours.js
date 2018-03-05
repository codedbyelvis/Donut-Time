import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class Hours extends Component {

    render() {
        return (
            <div className='Hours'> 
            <div className='HoursContainer'> 
                <h1 className='Title'>Hours</h1> 
                <h3 className='Mon'>Monday</h3><p className='MonT'>5:00 AM - 2:00 PM</p>
                <h3 className='Tue'>Tuesday</h3><p className='TueT'>5:00 AM - 2:00 PM</p>
                <h3 className='Wed'>Wednesday</h3><p className='WedT'>5:00 AM - 2:00 PM</p>
                <h3 className='Thu'>Thursday</h3><p className='ThuT'>5:00 AM - 2:00 PM</p>
                <h3 className='Fri'>Friday</h3><p className='FriT'>5:00 AM - 2:00 PM</p>
                <h3 className='Sat'>Saturday</h3><p className='SatT'>6:00 AM - 1:00 PM</p>
                <h3 className='Sun'>Sunday</h3><p className='SunT'>6:00 AM - 1:00 PM</p>
                
            </div> 
            </div> 
        )
    }
}


import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
    render (){
      return (
        <nav>
            <Link to='/Menu' className='NavMenu'>Menu </Link>
            <Link to='/Hours' className='NavHours'>Hours </Link>
            <Link to='/Contact' className='NavContact'>Contact </Link>
            <Link to='/Cart' className='NavCart'>Cart</Link>
        </nav>
      );
    }
  }
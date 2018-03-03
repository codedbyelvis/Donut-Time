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

{/* <nav>
            <div className="navWide">
      <div className="wideDiv">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
    </div>
    <div className="navNarrow">
      <i className="fa fa-bars fa-2x"></i>
        <div className="narrowLinks">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
        </div>
  </div>

        </nav> */}

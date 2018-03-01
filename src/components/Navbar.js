import React, { Component } from 'react';
import axios from 'axios';

const NavComponent = React.createClass({
    render: function() {
      return (
        <nav>
            <ul class='gridlist'>
                <li><a href='/Menu'/><b>Menu</b></li>
                <li><a href='/Hours'/><b>Hours</b></li>
                <li><a href='/Contact'/><b>Contact</b></li>
                <li><a href='/Cart'/><b>Cart</b></li>
            </ul>
        </nav>
      );
    }
  });

export default Button;

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

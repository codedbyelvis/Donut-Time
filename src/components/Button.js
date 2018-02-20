import React, { Component } from 'react';
import axios from 'axios';

function Button(props){
  return(
    <button className = "Button"
              onClick = {
                  () => props.fnc() }>
                  {props.children}
    </button>)
}

export default Button;

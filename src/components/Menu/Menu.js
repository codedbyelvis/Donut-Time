import React, { Component } from 'react';
import axios from 'axios';
// import Search from './Search';
import {Link} from 'react-router-dom';
export default class Menu extends Component {

    constructor(props){
        super(props)
        this.state = {
            donuts: []
        }
    }

    componentDidMount(){
        axios.get('/api/donuts').then(res => {
            this.setState({
                donuts:res.data
            },() =>console.log(this.state))
        })
    }

    render() {
        let donutsToDisplay = this.state.donuts.map(val => {
            return(
                <Link to={`/Donut/${val.donut_id}`}><div>
                    <img src={val.donut_img} />
                    <h2>{val.donut_name}</h2>
                </div></Link>
            )
        })
        return (
            <div className='Menu'>  
            <div className='dos'>{donutsToDisplay}</div>
            </div> 
        )
    }
}


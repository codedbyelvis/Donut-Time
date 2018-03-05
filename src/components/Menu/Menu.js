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
                <div className='Loop'>
                <Link to={`/Donut/${val.donut_id}`}><div>
                    <img className='MenuImg' src={val.donut_img} />
                    <h2 className='MenuName'>{val.donut_name}</h2>
                </div></Link>
                </div>
            )
        })
        return (
            <div className="Menu">
            <div className="MenuContainer">
            <h1 classname='MenuTitle'>Menu</h1>
            <div className='MenuDisplay'>{donutsToDisplay}</div>
            </div> 
            </div> 
        )
    }
}


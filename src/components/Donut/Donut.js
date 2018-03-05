import React, { Component } from 'react';
import axios from 'axios';
import Button from '../Button';
import {addCart, getUser} from '../../ducks/reducer';
import {connect} from 'react-redux';


class Donut extends Component {

    constructor(props){
        super(props)
        this.state = {
            donut: {},
            amount: 0,
            toggle:false
        }
    }

    componentDidMount(){
        axios.get(`/api/donuts/${this.props.match.params.id}`).then(res => {
            this.setState({
                donut:res.data[0]
            },() =>console.log(this.state))
        })
        this.props.getUser()
    }
    checkLogin(){
        console.log("ID", this.props.user.user_id)
        console.log("s\props", this.props)
        if(this.props.user.user_id){
            this.props.addCart(this.state.donut,this.state.amount)
        } else {
            this.setState({toggle:true})
        }
    }
    render() {
        const {donut} = this.state;
        return (
            <div className='Donut'>  
            {/* <div className='DonutContainer'> */}
            <div className='Everything'>
                    <img className='DonutImg' src={donut.donut_img} alt='' />
                    <h2 className='DonutName'>{donut.donut_name}</h2>
                     <p className='DonutPrice'>{donut.donut_price}</p>
                    <p className='DonutDesc'>{donut.donut_desc}</p>
                    <p className='DonutAmount'>{this.state.amount}</p>
                
                    {
                this.state.toggle
                ?
                <a href={`${process.env.BaseURL}/auth?location=${this.props.location.pathname}`}><Button className='logIn'>Login</Button></a>
                :
                null
            }
            
            <Button className='ADD' fnc={() => {this.checkLogin()}}>ADD</Button>
             <Button className='single' fnc={() => this.setState({amount: this.state.amount +1})}>Single</Button>
             <Button className='half-dozen' fnc={() => this.setState({amount: this.state.amount +6})}>Half-Dozen</Button>
             <Button className='dozen' fnc={() => this.setState({amount: this.state.amount +12})}>Dozen</Button>
             
            </div>
            {/* </div> */}
            </div> 
        )
    }
}

function mapStateToProps( state ) {
    return state;
  }
  
  export default connect( mapStateToProps, {addCart, getUser} )( Donut );
//   comment
import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'; 
import {getUser} from '../../ducks/reducer';
import background from './donutTime.jpg';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          reviews: []
        }
      }

      componentDidMount(){
        axios.get('/api/reviews')
        .then(res=>{
            console.log('the cat came back')
            this.setState({
                reviews: res.data
            });
        })
        this.props.getUser()
    }

    render() {
        console.log(this.props.user)

        const list = this.state.reviews.length ? this.state.reviews.map((val,i)=>(
            <p key={i}>{val.user_review}</p>
        )):null
        console.log('dude', this.props.user);
        return (
            <div className='App'>  
                <img src={background} alt=""/>
            {
                    this.props.user.user_id?

                <a href={ process.env.REACT_APP_LOGIN }>
                    <button>Logout</button>
                </a>
                    :
                <a href={ process.env.REACT_APP_LOGIN }>
                    <button>Login</button>
                </a>
                }
                home goes here
                {list}
            </div> 
        )
    }
}

function mapStateToProps( state ) {
    return state;
  }
  
  export default connect( mapStateToProps, {getUser} )( Home );
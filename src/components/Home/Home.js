import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'; 
import {getUser} from '../../ducks/reducer';
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
            <div className='Home'>  
            <div className='HomeContainer'>
            <h1 className='Welcome'>Welcome to Donut Time</h1>            {
                    this.props.user.user_id?

                <a href={ process.env.REACT_APP_LOGIN+'/logout' }>
                    <button>Logout</button>
                </a>
                    :
                <a href={ process.env.REACT_APP_LOGIN }>
                    <button>Login</button>
                </a>
                }
                <p className='Reviews'>{list}</p>
            </div>
            </div>
        )
    }
}

function mapStateToProps( state ) {
    return state;
  }
  
  export default connect( mapStateToProps, {getUser} )( Home );
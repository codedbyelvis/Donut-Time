import React, { Component } from 'react';
import axios from 'axios';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      herolist:[]
    }
  }

  handleChange(value) {
    this.setState({
      searchTerm: value
    }, () => console.log(this.state))
  }

  filterMarvel(val) {
    this.setState({
      searchTerm: val
    })
    axios.get('/api/heroes/filter?val=' + val)
    .then(res=>{
      this.setState({
        herolist: res.data
      })
    })
  }

render() {
  return (
    <div>
      <input placeholder="Search Hero" onChange={(e) => this.filterMarvel(e.target.value)} />
      <HeroList list={this.state.herolist} />
    </div>
  );
}
}
export default Search;
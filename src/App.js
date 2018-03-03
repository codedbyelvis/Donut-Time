import React, { Component } from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Contact from './components/Contact/Contact';
import Donut from './components/Donut/Donut';
import Menu from './components/Menu/Menu';
import Home from './components/Home/Home';
import Hours from './components/Hours/Hours';
import Order from './components/Order/Order';
import Cart from './components/Cart/Cart';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <HashRouter>
      <div className="App">
      <Navbar/>
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/Menu' component={Menu} />
          <Route path='/Donut/:id' component={Donut} />
          <Route path='/Cart' component={Cart} />
          <Route path='/Hours' component={Hours} />
          <Route path='/Contact' component={Contact} />
        </Switch>
      </div>
      </HashRouter>
    );
  }
}

export default App;

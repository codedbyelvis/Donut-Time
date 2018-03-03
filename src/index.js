import React from 'react';
import ReactDOM from 'react-dom';
import './container.css';
import App from './App';
import {unregister} from './registerServiceWorker';
import store from './store';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';

ReactDOM.render(
<Provider store = {store}>
<App />
</Provider>, document.getElementById('root'));
unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './store/reducer';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from './containers/Layout/Layout';

// const store = createStore(rootReducer);

// ReactDOM.render(<Provider store={store}><Layout /></Provider>, document.getElementById('root'));
ReactDOM.render(<Layout />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

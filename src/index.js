import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux"
import {createStore, applyMiddleware} from "redux"
import Userreducer from "./Userreducer";
import logger from "redux-logger";
//import {routerMiddleware} from "react-router-redux"
//import {createHistory} from 'history/createBrowserHistory'
//const history = createHistory()
//const middleware=routerMiddleware(history)
const store = createStore(Userreducer, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    <App /> </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

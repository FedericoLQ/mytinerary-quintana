import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as bootstrap from 'bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import {createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import mainReducer from './redux/reducers/mainReducer';

 const centralStore = createStore(mainReducer, applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={centralStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);



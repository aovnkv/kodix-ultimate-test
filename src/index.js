import React from 'react';
import { render } from 'react-dom';
import 'core-js/es/map';
import 'core-js/es/set';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import 'react-app-polyfill/ie9';
import { createLogger } from 'redux-logger';
import './index.css';
import App from './App';

import reduce from './store/reducers';
// import { fetchCars } from './store/actions';

const logger = createLogger();
const store = createStore(
  // combineReducers({ reduce }),
  reduce,
  applyMiddleware(thunk, logger)
);

//store.dispatch(fetchCars()).then(() => console.log(store.getState()));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

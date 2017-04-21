import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import App from './components/App'
import { reducers } from './reducers/index';
import { sagas } from './sagas/index';

const sagaMiddleware = createSagaMiddleware();
let middleware = applyMiddleware(sagaMiddleware);
const store = createStore(reducers, middleware);

sagaMiddleware.run(sagas);

ReactDOM.render(
  <Provider store={store}>
     <App />
  </Provider>,
  document.getElementById('app')
);

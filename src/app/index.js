import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import searchResultsReducers from '../reducers';
import { searchResultsSuccess } from '../actions';
import Layout from './components/Layout/Layout.jsx';
import './main.css';

const store = createStore(searchResultsReducers);

render(
  <Provider store={store}>
    <Layout />
  </Provider>,
  document.getElementById('app'),
);

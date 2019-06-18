import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { reducers } from './ducks';
import SearchResultsPage from './components/SearchResultsPage/SearchResultsPageContainer.jsx';
import ArtistDetailsPage from './components/ArtistDetailsPage/ArtistDetailsPageContainer.jsx';
import './main.css';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

render(
  <Provider store={store}>
    <BrowserRouter>
      <Route exact path="/" component={SearchResultsPage} />
      <Route exact path="/search/:query" component={SearchResultsPage} />
      <Route exact path="/artist/:id" component={ArtistDetailsPage} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app'),
);

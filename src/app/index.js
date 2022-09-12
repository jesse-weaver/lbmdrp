import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { reducers } from './ducks';
import SearchResultsPage from './components/SearchResultsPage/SearchResultsPageContainer.jsx';
import HomePage from './components/HomePage/HomePage.jsx';
import ArtistDetailsPage from './components/ArtistDetailsPage/ArtistDetailsPageContainer.jsx';
import './main.css';
import './main.scss'

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */


const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route exact path="/search/:query" element={<SearchResultsPage/>} />
        <Route exact path="/artist/:id" element={<ArtistDetailsPage/>} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

const rootElement = document.getElementById('app');
const root = createRoot(rootElement)
root.render(<App />)
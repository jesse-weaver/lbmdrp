import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/Header.jsx';
import SearchContainer from './components/search/SearchContainer.jsx';

const PageLayout = function pageLayout() {
  return (
    <div className="container">
      <Header/>
      <SearchContainer/>
    </div>
  );
}

export default function () {
  ReactDOM.render(<PageLayout />, document.getElementById('app'));
}

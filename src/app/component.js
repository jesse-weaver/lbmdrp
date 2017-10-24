import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/Header.jsx';
import Search from './components/search/Search.jsx';
import SearchResults from './components/search/SearchResults.jsx';



const HelloComponent = function helloComponent() {
  return <div>Giddy up</div>;
};

const PageLayout = function pageLayout() {
  return (
    <div className="container">
      <Header/>
      <Search/>
      <SearchResults/>
    </div>
  );
}

export default function () {
  ReactDOM.render(<PageLayout />, document.getElementById('app'));
}

import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/Header.jsx';

const HelloComponent = function helloComponent() {
  return <div>Giddy up</div>;
};

const PageLayout = function pageLayout() {
  return (
    <div className="header">
      <Header/>
    </div>
  );
}

export default function () {
  ReactDOM.render(<PageLayout />, document.getElementById('app'));
}

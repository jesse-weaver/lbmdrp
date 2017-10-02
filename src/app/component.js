import React from 'react';
import ReactDOM from 'react-dom';

const HelloComponent = function helloComponent() {
  return <div>Giddy up</div>;
};

export default function () {
  ReactDOM.render(<HelloComponent />, document.getElementById('app'));
}

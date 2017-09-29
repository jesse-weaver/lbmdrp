import React from 'react';
import ReactDOM from 'react-dom';

// var HelloComponent = React.createClass({
//     render: function() {
//         return <div>Hello </div>;
//     }
// });





export default function() {
  const element = document.createElement('h3');
  element.innerHTML = 'do what the fuck you want!';
  return element;
  // ReactDOM.render(HelloComponent, document.getElementById('app'))
}


// class Layout extends React.Component {
//   render() {
//     return (
//       <div className="Main">
//         <Header />
//         <SearchBar>
//           <SearchButton
//             buttonType="big"
//             />
//         </SearchBar>
//         <SearchResults />
//       </div>
//     );
//   }
// }


//ReactDOM.render(Main, document.getElementById('app'))

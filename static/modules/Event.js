import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

import List from './List';



// export default React.createClass({
// 	render() {
//     return (
//       <div>
//         <p><Link to="/">Back</Link></p>
//         <h2 id="eventName"></h2>
//         <p id="eventDate"></p>
//         <p id="eventDescription"></p>


//       </div>
//     )
//   }
// });


export default class Event extends Component {
  render() {
    return (
      <div>
        <Link to='/'>Home</Link>
        <h2 id="eventName"></h2>
        <p id="eventDate"></p>
        <p id="eventDescription"></p>
      </div>
    )
  }
}

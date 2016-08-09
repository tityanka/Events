import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';


export default class Events extends Component {
	render() {
    return (
      <div>
       	<h1>Events List</h1>
        <div id="eventsList">

        </div>
        <p>Event Description</p> 
       </div>
    )
  }
}
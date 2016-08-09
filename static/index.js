import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import store from './state';
import App from './modules/App'
import Events from './modules/Events'
import Event from './modules/Event'


ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Events} />
    <Route path="/event" component={Event} />
  </Router>
), document.getElementById('app'));
  
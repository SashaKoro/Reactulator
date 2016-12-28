import 'babel-polyfill';       // Polyfill for features ES6 features that babel can't handle
import React from 'react';
import { render } from 'react-dom';
import {Router, browserHistory } from 'react-router';   // browserHistory handles history Url's
import routes from './routes';
import './styles/styles.css';      // Bundles CSS
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; // Bundles Bootstrap CSS

render (
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('app')
);

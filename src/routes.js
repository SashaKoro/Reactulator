import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import Calculator from './components/calculator/Calculator';
import Frankulator from './components/frankulator/Frankulator';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Calculator} />
    <Route path="frankulator" component={Frankulator} />
  </Route>
);

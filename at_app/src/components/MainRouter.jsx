import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './App';
import Starter from './Starter';
import Addition from './Addition';
import Substraction from './Substraction';
import Multiplication from './Multiplication';
import Division from './Division';

export default function MainRouter() {
  return (
    <Router history={hashHistory} >
      <Route path="/" component={App} >
        <IndexRoute component={Starter} />
        <Route path="addition" component={Addition} />
        <Route path="substraction" component={Substraction} />
        <Route path="multiplication" component={Multiplication} />
        <Route path="division" component={Division} />
      </Route>
    </Router>
  );
}

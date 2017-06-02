import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Starter from './components/Starter';
import Addition from './components/Addition';
import Substraction from './components/Substraction';
import Multiplication from './components/Multiplication';
import Division from './components/Division';
import './css/style.css';
import './css/reset.css';

//ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Starter} />
      <Route path="addition" component={Addition} />
      <Route path="substraction" component={Substraction} />
      <Route path="multiplication" component={Multiplication} />
      <Route path="division" component={Division} />
    </Route>
  </Router>
), document.getElementById('root'));

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import MainRouter from './components/MainRouter';
import store from './store/store.jsx';

import './css/style.css';
import './css/reset.css';

render(
  <Provider store={store}>
    <MainRouter />
  </Provider>, 
  document.getElementById('root')
);

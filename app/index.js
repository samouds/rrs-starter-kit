import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import configureStore from 'store/configureStore';

// Containers
import HomePage from 'containers/HomePage';

import 'normalize.css/normalize.css';
import './styles/index.less';

const store = configureStore();

ReactDOM.render(
  <Provider store={ store }>
    <Router>
      <Route path="/" component={ HomePage } />
    </Router>
  </Provider>,
  document.getElementById('app')
);

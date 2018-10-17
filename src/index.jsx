import 'babel-polyfill';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// If your server supports server rendering, use browserHistory replace with hashHistory.
import configureStore from './store';
import registerServiceWorker from './registerServiceWorker';
import AppRoutes from './routes';

const state = window.__initialState__ || undefined;
const store = configureStore(state);

ReactDOM.render(
  <Provider store={store}>
    <AppRoutes />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

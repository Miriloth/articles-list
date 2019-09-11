/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/configureStore';

ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>, document.getElementById('root'),
);

serviceWorker.unregister();

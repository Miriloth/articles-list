import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger'; // eslint-disable-line
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

export default function configureStore() {
  return createStore(
    rootReducer,
    compose(applyMiddleware(thunk, createLogger())),
  );
}

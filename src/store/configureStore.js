import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

export default function configureStore() {
  return createStore(
    rootReducer,
    compose(applyMiddleware(thunk, createLogger())),
  );
}

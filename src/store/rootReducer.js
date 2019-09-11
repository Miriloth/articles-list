import { combineReducers } from 'redux';

import ArticlesListReducer from '../scenes/articles/List/reducer';

const rootReducer = combineReducers({
  articles: combineReducers({
    list: ArticlesListReducer,
  }),
});

export default rootReducer;

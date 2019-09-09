import * as actions from './actions';
import get from 'lodash/get';

import { articleCategoriesList } from '../utils/articleCategories';

const getDefaultCategories = () => articleCategoriesList;
const getDefaultSort = () => '';

const initialState = {
  isFetching: false,
  articlesById: {},
  displayedArticlesIds: [],
  didInvalidate: true,
  categories: articleCategoriesList,
  sort: '',
  selectedCategories: getDefaultCategories(),
  selectedSort: getDefaultSort(),
};

const articlesListReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_ARTICLES_REQUEST: {
      return Object.assign({}, state, {
        isFetching: true,
      });
    }

    case actions.FETCH_ARTICLES_SUCCESS: {
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        articlesById: action.articles.map(article => ({
          [get(article, 'id')]: article,
        })),
        displayedArticlesIds: action.articles.map(article => get(article, 'id')),
      });
    }

    case actions.FETCH_ARTICLES_FAILURE: {
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error,
      });
    }

    default:
      return state;
  }
};

export default articlesListReducer;

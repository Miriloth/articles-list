import * as actions from './actions';
import get from 'lodash/get';

import { articleCategoriesList } from '../utils/articleCategories';
import { sortingOptions } from '../utils/sortingOptions';
import { arrayToCollectionById } from '../../../helpers';

const getDefaultCategories = () => articleCategoriesList;
const getDefaultSort = () => sortingOptions[0];

const initialState = {
  isFetching: false,
  entries: {},
  articlesIds: [],
  didInvalidate: true,
  error: null,
  categories: articleCategoriesList,
  sorts: sortingOptions,
  selectedCategories: getDefaultCategories(),
  selectedSort: getDefaultSort(),
};

const articlesListReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_ARTICLES_REQUEST: {
      return Object.assign({}, state, {
        isFetching: true,
        error: null,
      });
    }

    case actions.FETCH_ARTICLES_SUCCESS: {
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        entries: arrayToCollectionById(action.articles),
        articlesIds: action.articles.map(article => get(article, 'id')),
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

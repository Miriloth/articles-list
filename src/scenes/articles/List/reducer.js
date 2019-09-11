import * as actions from './actions';
import xor from 'lodash/xor';

import { articleCategoriesList } from '../utils/articleCategories';
import { sortingOptions } from '../utils/sortingOptions';
import { arrayToCollectionById } from '../../../helpers';
import { sortArticlesByDate } from '../utils/sortArticlesByDate';

const initialState = {
  isFetching: false,
  entries: {},
  articlesIds: [],
  didInvalidate: true,
  error: null,
  categories: articleCategoriesList,
  selectedCategories: [],
  sortingOption: sortingOptions.ASC,
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
      const entries = arrayToCollectionById(action.articles);

      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        articlesIds: sortArticlesByDate(entries, state.sortingOption),
        entries,
      });
    }

    case actions.FETCH_ARTICLES_FAILURE: {
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error,
      });
    }

    case actions.TOGGLE_CATEGORY_FILTER: {
      return Object.assign({}, state, {
        selectedCategories: xor(state.selectedCategories, [action.categoryFilter]),
      })
    }

    case actions.CHANGE_SORTING_OPTION: {
      return Object.assign({}, state, {
        sortingOption: action.sortingOption,
        articlesIds: sortArticlesByDate(state.entries, action.sortingOption)
      })
    }

    default:
      return state;
  }
};

export default articlesListReducer;

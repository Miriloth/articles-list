import xor from 'lodash/xor';
import * as actions from './actions';

import { articleCategoriesList } from '../utils/articleCategories';
import { sortingOptions } from '../utils/sortingOptions';
import { arrayToCollectionById } from '../../../helpers';
import { sortArticlesByDate } from '../utils/sortArticlesByDate';
import { filterArticlesByCategories } from '../utils/filterArticlesByCategories';

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
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }

    case actions.FETCH_ARTICLES_SUCCESS: {
      const entries = arrayToCollectionById(action.articles);

      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        articlesIds: sortArticlesByDate(entries, state.sortingOption),
        entries,
      };
    }

    case actions.FETCH_ARTICLES_FAILURE: {
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    }

    case actions.TOGGLE_CATEGORY_FILTER: {
      const newCategoriesArray = xor(state.selectedCategories, [action.categoryFilter]);

      return {
        ...state,
        selectedCategories: newCategoriesArray,
        articlesIds: filterArticlesByCategories(newCategoriesArray, state.entries),
      };
    }

    case actions.CHANGE_SORTING_OPTION: {
      return {
        ...state,
        sortingOption: action.sortingOption,
        articlesIds: sortArticlesByDate(state.entries, action.sortingOption),
      };
    }

    default:
      return state;
  }
};

export default articlesListReducer;

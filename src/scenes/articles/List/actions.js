import get from 'lodash/get';

import APIService from '../../../services/APIService';
import { articleCategoriesListAPI } from '../utils/articleCategories';

export const FETCH_ARTICLES_REQUEST = 'FETCH_ARTICLES_REQUEST';
export const FETCH_ARTICLES_FAILURE = 'FETCH_ARTICLES_FAILURE';
export const FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS';
export const TOGGLE_CATEGORY_FILTER = 'TOGGLE_CATEGORY_FILTER';
export const CHANGE_SORTING_OPTION = 'CHANGE_SORTING_OPTION';

const APIFetchArticles = (category) => APIService.get(`/articles/${category}`);

const fetchArticlesRequest = () => ({
  type: FETCH_ARTICLES_REQUEST,
});

const fetchArticlesFailure = (error) => ({
  type: FETCH_ARTICLES_FAILURE,
  error,
});

const fetchArticlesSuccess = (articles) => ({
  type: FETCH_ARTICLES_SUCCESS,
  articles,
});

const mergeResponses = (responses) => responses.reduce((prev, curr) => [
  ...prev,
  ...get(curr, 'data.articles', []),
], []);

export const toggleCategoryFilter = (categoryFilter) => ({
  type: TOGGLE_CATEGORY_FILTER,
  categoryFilter,
});

export const changeSortingOption = (sortingOption) => ({
  type: CHANGE_SORTING_OPTION,
  sortingOption,
});

export const fetchArticles = () => (dispatch) => {
  dispatch(fetchArticlesRequest());

  return Promise.all(articleCategoriesListAPI.map((category) => APIFetchArticles(category)))
    .then((responses) => {
      const articles = mergeResponses(responses);

      dispatch(fetchArticlesSuccess(articles));
    })
    .catch((error) => {
      dispatch(fetchArticlesFailure(error));
    });
};

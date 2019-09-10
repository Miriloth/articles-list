import get from 'lodash/get';

import APIService from '../../../services/APIService';

export const FETCH_ARTICLES_REQUEST = 'FETCH_ARTICLES_REQUEST';
export const FETCH_ARTICLES_FAILURE = 'FETCH_ARTICLES_FAILURE';
export const FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS';
export const TOGGLE_CATEGORY_FILTER = 'TOGGLE_CATEGORY_FILTER';

const APIFetchArticles = category => APIService.get(`/articles/${category}`);

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

const getActiveCategories = (state) => {
  const activeCategories = get(state, 'articles.list.selectedCategories', []);
  const allCategories = get(state, 'articles.list.categories');

  return activeCategories.length > 0
    ? activeCategories
    : allCategories;
};

const mergeResponses = (responses) => responses.reduce((prev, curr) => [
  ...prev,
  ...get(curr, 'data.articles', []),
], []);

export const toggleCategoryFilter = (categoryFilter) => ({
  type: TOGGLE_CATEGORY_FILTER,
  categoryFilter,
});

export const fetchArticles = () => (dispatch, getState) => {
  const state = getState();
  const activeCategories = getActiveCategories(state);

  dispatch(fetchArticlesRequest());

  return Promise.all(activeCategories.map(category => APIFetchArticles(category)))
    .then((responses) => {
      const articles = mergeResponses(responses);

      dispatch(fetchArticlesSuccess(articles));
    })
    .catch((error) => {
      dispatch(fetchArticlesFailure(error));
    });
};

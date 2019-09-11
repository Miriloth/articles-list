import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ArticlesList from './ArticlesList';
import {
  changeSortingOption,
  fetchArticles,
  toggleCategoryFilter,
} from './actions';
import { articleModel } from '../../../models/article';

const ArticlesListContainer = ({
  onFetchArticles,
  articles,
  categories,
  selectedCategories,
  onToggleCategoryFilter,
  onChangeSortingOption,
  sortingOption,
  error,
}) => {
  useEffect(() => {
    onFetchArticles();
  }, [onFetchArticles]);

  return (
    <ArticlesList
      articles={articles}
      categories={categories}
      selectedCategories={selectedCategories}
      sortingOption={sortingOption}
      onToggleCategoryFilter={onToggleCategoryFilter}
      onChangeSortingOption={onChangeSortingOption}
      error={error}
      onFetchArticles={onFetchArticles}
    />
  );
};

function mapStateToProps({
  articles: {
    list: {
      entries,
      articlesIds,
      categories,
      selectedCategories,
      sortingOption,
      error,
    },
  },
}) {
  const articles = articlesIds.map((articleId) => entries[articleId]);

  return {
    selectedCategories,
    articles,
    categories,
    sortingOption,
    error,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onFetchArticles: () => dispatch(fetchArticles()),
    onToggleCategoryFilter: (categoryFilter) => dispatch(toggleCategoryFilter(categoryFilter)),
    onChangeSortingOption: (sortingOption) => dispatch(changeSortingOption(sortingOption)),
  };
}

ArticlesListContainer.propTypes = {
  onFetchArticles: PropTypes.func.isRequired,
  selectedCategories: PropTypes.arrayOf(PropTypes.string).isRequired,
  articles: PropTypes.arrayOf(articleModel).isRequired,
  onToggleCategoryFilter: PropTypes.func.isRequired,
  onChangeSortingOption: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  sortingOption: PropTypes.string.isRequired,
  error: PropTypes.string,
};
ArticlesListContainer.defaultProps = {
  error: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesListContainer);

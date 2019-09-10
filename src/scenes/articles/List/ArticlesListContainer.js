import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ArticlesList from './ArticlesList';
import { fetchArticles, toggleCategoryFilter } from './actions';
import { articleModel } from '../../../models/article';

const ArticlesListContainer = ({
  onFetchArticles,
  articles,
  categories,
  sorts,
  selectedCategories,
  selectedSort,
  onToggleCategoryFilter,
}) => {
  useEffect(() => {
    onFetchArticles();
  }, [onFetchArticles, selectedCategories]);

  return (
    <ArticlesList
      articles={articles}
      categories={categories}
      sorts={sorts}
      selectedCategories={selectedCategories}
      selectedSort={selectedSort}
      onToggleCategoryFilter={onToggleCategoryFilter}
    />
  );
};

function mapStateToProps({
  articles: {
    list: {
      entries,
      articlesIds,
      categories,
      sorts,
      selectedCategories,
      selectedSort,
    }
  }
}) {
  const articles = articlesIds.map(articleId => entries[articleId]);

  return {
    selectedCategories,
    articles,
    categories,
    sorts,
    selectedSort,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onFetchArticles: () => dispatch(fetchArticles()),
    onToggleCategoryFilter: (categoryFilter) => dispatch(toggleCategoryFilter(categoryFilter)),
  }
}

ArticlesListContainer.propTypes = {
  onFetchArticles: PropTypes.func.isRequired,
  selectedCategories: PropTypes.arrayOf(PropTypes.string),
  articles: PropTypes.arrayOf(articleModel),
  onToggleCategoryFilter: PropTypes.func.isRequired,
};
ArticlesListContainer.defaultProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesListContainer);

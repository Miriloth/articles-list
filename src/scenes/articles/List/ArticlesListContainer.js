import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ArticlesList from './ArticlesList';
import { fetchArticles } from './actions';
import { articleModel } from '../../../models/article';

const ArticlesListContainer = ({ onFetchArticles, selectedCategories, articles }) => {
  useEffect(() => {
    onFetchArticles();
  }, [onFetchArticles, selectedCategories]);

  return (
    <ArticlesList articles={articles} />
  );
};

function mapStateToProps({ articles: { list: { selectedCategories, entries, articlesIds } } }) {
  const articles = articlesIds.map(articleId => entries[articleId]);

  return {
    selectedCategories,
    articles,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onFetchArticles: () => dispatch(fetchArticles()),
  }
}

ArticlesListContainer.propTypes = {
  onFetchArticles: PropTypes.func.isRequired,
  selectedCategories: PropTypes.arrayOf(PropTypes.string),
  articles: PropTypes.arrayOf(articleModel),
};
ArticlesListContainer.defaultProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesListContainer);

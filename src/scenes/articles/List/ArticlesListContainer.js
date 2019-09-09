import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ArticlesList from './ArticlesList';
import { fetchArticles } from './actions';

const ArticlesListContainer = ({ onFetchArticles, selectedCategories }) => {
  useEffect(() => {
    onFetchArticles();
  }, [onFetchArticles, selectedCategories]);

  return (
    <ArticlesList />
  );
};

function mapStateToProps({ articles: { list: { selectedCategories } } }) {
  return {
    selectedCategories,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onFetchArticles: () => dispatch(fetchArticles()),
  }
}

ArticlesListContainer.propTypes = {
  onFetchArticles: PropTypes.func.isRequired,
};
ArticlesListContainer.defaultProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesListContainer);

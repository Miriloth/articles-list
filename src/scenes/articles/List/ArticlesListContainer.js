import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

import ArticlesList from './ArticlesList';

const ArticlesListContainer = () => (
  <ArticlesList />
);

ArticlesListContainer.propTypes = {};
ArticlesListContainer.defaultProps = {};

function mapStateToProps({ articles: { list } }) {
  return {
    list,
  }
}

export default connect(mapStateToProps, null)(ArticlesListContainer);

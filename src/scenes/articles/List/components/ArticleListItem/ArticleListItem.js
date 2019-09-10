import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ArticleListItem.scss';

class ArticleListItem extends Component {
  render() {
    const { article } = this.props;
    return (
      <div className="articles-list-item">
        {article.title}
      </div>
    );
  }
}

ArticleListItem.propTypes = {};
ArticleListItem.defaultProps = {};

export default ArticleListItem;

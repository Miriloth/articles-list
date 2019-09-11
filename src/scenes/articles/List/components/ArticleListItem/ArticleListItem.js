import React from 'react';

import './ArticleListItem.scss';
import { articleModel } from '../../../../../models/article';

const ArticleListItem = ({ article }) => (
  <div className="articles-list-item">
    {article.title}
  </div>
);

ArticleListItem.propTypes = {
  article: articleModel.isRequired,
};
ArticleListItem.defaultProps = {};

export default ArticleListItem;

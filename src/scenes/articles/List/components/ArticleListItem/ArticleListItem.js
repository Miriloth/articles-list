import React from 'react';

import './ArticleListItem.scss';
import { articleModel } from '../../../../../models/article';

const ArticleListItem = ({ article }) => (
  <div className="article-list-item">
    <div className="article-preview-wrapper">
      {article.image ? (
        <img
          src={article.image}
          alt={article.title}
        />
      ) : (
        <img
          src="http://mpmco.com/wp-content/uploads/2018/02/placeholder.jpg"
          alt={article.title}
        />
      )}
    </div>
    <div className="article-details">
      <div className="article-header-wrapper">
        <h3 className="article-header-title">{article.title}</h3>
        <h4 className="article-header-date">{article.date}</h4>
      </div>
      <div className="article-preamble-wrapper">
        <p>{article.preamble}</p>
      </div>
    </div>
  </div>
);

ArticleListItem.propTypes = {
  article: articleModel.isRequired,
};
ArticleListItem.defaultProps = {};

export default ArticleListItem;

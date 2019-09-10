import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import ArticleListItem from './components/ArticleListItem/ArticleListItem';
import CategoriesFilter from './components/CategoriesFilter/CategoriesFilter';
import SortBar from './components/SortBar/SortBar';

import './ArticlesList.scss';

const ArticlesList = ({
  articles,
  categories,
  sorts,
  selectedCategories,
  selectedSort,
  onToggleCategoryFilter,
}) => (
  <div className="articles-list-wrapper">
    <CategoriesFilter
      categories={categories}
      selectedCategories={selectedCategories}
      onToggleCategoryFilter={onToggleCategoryFilter}
    />
    <SortBar
      sorts={sorts}
      selectedSort={selectedSort}
    />
    <div className="articles-list">
      {articles.map(article => (
        <ArticleListItem
          key={article.key}
          article={article}
        />
      ))}
    </div>
  </div>
);

ArticlesList.propTypes = {};
ArticlesList.defaultProps = {};

export default ArticlesList;

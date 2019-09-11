import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import ArticleListItem from './components/ArticleListItem/ArticleListItem';
import CategoriesFilter from './components/CategoriesFilter/CategoriesFilter';
import SortBar from './components/SortBar/SortBar';

import './ArticlesList.scss';

const ArticlesList = ({
  articles,
  categories,
  selectedCategories,
  onToggleCategoryFilter,
  onChangeSortingOption,
  sortingOption
}) => (
  <div className="articles-list-wrapper">
    <CategoriesFilter
      categories={categories}
      selectedCategories={selectedCategories}
      onToggleCategoryFilter={onToggleCategoryFilter}
    />
    <SortBar
      sortingOption={sortingOption}
      onChangeSortingOption={onChangeSortingOption}
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

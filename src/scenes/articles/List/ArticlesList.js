import React from 'react';
import PropTypes from 'prop-types';

import ArticleListItem from './components/ArticleListItem/ArticleListItem';
import CategoriesFilter from './components/CategoriesFilter/CategoriesFilter';
import SortBar from './components/SortBar/SortBar';

import './ArticlesList.scss';
import { articleModel } from '../../../models/article';

const ArticlesList = ({
  articles,
  categories,
  selectedCategories,
  onToggleCategoryFilter,
  onChangeSortingOption,
  sortingOption,
}) => (
  <div className="app-container articles-list-wrapper">
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
      {articles.map((article) => (
        <ArticleListItem
          key={article.key}
          article={article}
        />
      ))}
    </div>
  </div>
);

ArticlesList.propTypes = {
  articles: PropTypes.arrayOf(articleModel).isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedCategories: PropTypes.arrayOf(PropTypes.string).isRequired,
  onToggleCategoryFilter: PropTypes.func.isRequired,
  onChangeSortingOption: PropTypes.func.isRequired,
  sortingOption: PropTypes.string.isRequired,
};
ArticlesList.defaultProps = {};

export default ArticlesList;

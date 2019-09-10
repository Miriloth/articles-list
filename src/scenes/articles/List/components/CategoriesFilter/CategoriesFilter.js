import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './CategoriesFilter.scss';

const CategoriesFilter = ({
  categories,
  selectedCategories,
  onToggleCategoryFilter,
}) => (
  <div
    className="categories-filter"
  >
    {categories.map(category => (
      <div onClick={() => onToggleCategoryFilter(category)}>
        {category}
      </div>
    ))}
  </div>
);

CategoriesFilter.propTypes = {};
CategoriesFilter.defaultProps = {};

export default CategoriesFilter;

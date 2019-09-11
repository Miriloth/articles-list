import React from 'react';
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
    {categories.map((category) => {
      const isActive = selectedCategories.indexOf(category) > -1;

      return (
        <div
          onClick={() => onToggleCategoryFilter(category)}
          className={`category-filter-item ${isActive ? 'active' : ''}`}
        >
          {category}
        </div>
      );
    })}
  </div>
);

CategoriesFilter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedCategories: PropTypes.arrayOf(PropTypes.string).isRequired,
  onToggleCategoryFilter: PropTypes.func.isRequired,
};
CategoriesFilter.defaultProps = {};

export default CategoriesFilter;

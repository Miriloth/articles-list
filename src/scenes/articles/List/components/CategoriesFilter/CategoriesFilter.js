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
    <h4 className="categories-filter-header">Data sources</h4>
    <div className="categories-filter-wrapper">
      {categories.map((category) => {
        const isActive = selectedCategories.indexOf(category) > -1;

        return (
          <div
            key={category}
            onClick={() => onToggleCategoryFilter(category)}
            className={`category-filter-item ${isActive ? 'active' : ''}`}
          >
            <input checked={isActive} className="checkbox" type="checkbox" />
            {category}
          </div>
        );
      })}
    </div>
  </div>
);

CategoriesFilter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedCategories: PropTypes.arrayOf(PropTypes.string).isRequired,
  onToggleCategoryFilter: PropTypes.func.isRequired,
};
CategoriesFilter.defaultProps = {};

export default CategoriesFilter;

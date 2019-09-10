import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './CategoriesFilter.scss';

class CategoriesFilter extends Component {
  render() {
    return (
      <div
        className="categories-filter"
      >
        Filters
      </div>
    );
  }
}

CategoriesFilter.propTypes = {};
CategoriesFilter.defaultProps = {};

export default CategoriesFilter;

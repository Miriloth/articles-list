import React from 'react';
import PropTypes from 'prop-types';

import { sortingOptions } from '../../../utils/sortingOptions';

import './SortBar.scss';

const SortBar = ({ onChangeSortingOption, sortingOption }) => (
  <div className="sort-bar">
    Sort by date
    <div onClick={() => onChangeSortingOption(sortingOptions.ASC)}>
      asc
    </div>
    <div onClick={() => onChangeSortingOption(sortingOptions.DESC)}>
      desc
    </div>
  </div>
);

SortBar.propTypes = {
  onChangeSortingOption: PropTypes.func.isRequired,
};
SortBar.defaultProps = {};

export default SortBar;

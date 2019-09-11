import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as ArrowUpIcon } from '../../../../../icons/up-arrow.svg';
import { ReactComponent as ArrowDownIcon } from '../../../../../icons/down-arrow.svg';

import { sortingOptions } from '../../../utils/sortingOptions';

import './SortBar.scss';

const SortBar = ({
  onChangeSortingOption,
  sortingOption,
}) => (
  <div className="sort-bar">
    <h4>Sort by date</h4>
    <div className="arrows-wrapper">
      <div
        className={`icon ${sortingOption === sortingOptions.DESC ? 'active' : ''}`}
        onClick={() => onChangeSortingOption(sortingOptions.DESC)}
      >
        <ArrowUpIcon />
      </div>
      <div
        className={`icon ${sortingOption === sortingOptions.ASC ? 'active' : ''}`}
        onClick={() => onChangeSortingOption(sortingOptions.ASC)}
      >
        <ArrowDownIcon />
      </div>

    </div>
  </div>
);

SortBar.propTypes = {
  onChangeSortingOption: PropTypes.func.isRequired,
  sortingOption: PropTypes.string.isRequired,
};
SortBar.defaultProps = {};

export default SortBar;

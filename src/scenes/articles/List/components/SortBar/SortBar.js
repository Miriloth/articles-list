import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './SortBar.scss';

class SortBar extends Component {
  render() {
    return (
      <div
        className="sort-bar"
      >
        Sorts
      </div>
    );
  }
}

SortBar.propTypes = {};
SortBar.defaultProps = {};

export default SortBar;

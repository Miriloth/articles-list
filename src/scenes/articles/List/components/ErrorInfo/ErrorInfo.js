import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as ErrorIcon } from '../../../../../icons/icon-error.svg';

import './ErrorInfo.scss';

const ErrorInfo = ({ reloadArticles }) => (
  <div className="error-info">
    <i className="icon">
      <ErrorIcon />
    </i>
    <p className="error-message">
      Something went wrong. Press the button to reload
    </p>
    <button
      onClick={reloadArticles}
      type="button"
      className="button"
    >
      Reload
    </button>
  </div>
);

ErrorInfo.propTypes = {
  reloadArticles: PropTypes.func.isRequired,
};
ErrorInfo.defaultProps = {};

export default ErrorInfo;

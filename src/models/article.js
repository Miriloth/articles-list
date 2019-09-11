import PropTypes from 'prop-types';

const articleModel = PropTypes.shape({
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  preamble: PropTypes.string,
  title: PropTypes.string.isRequired,
});

export {
  articleModel,
};

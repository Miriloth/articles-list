import reduce from 'lodash/reduce';
import get from 'lodash/get';

const arrayToCollectionById = (dataArray) => reduce(dataArray, (prev, curr) => {
  prev[get(curr, 'id')] = curr;
  return prev;
}, {});

export default arrayToCollectionById;


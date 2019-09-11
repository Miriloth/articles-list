import map from 'lodash/map';
import orderBy from 'lodash/orderBy';

const sortArticlesByDate = (entries, sortingOption) => {
  const articles = map(entries, articleEntry => articleEntry);

  return orderBy(articles, ['date'], [sortingOption])
    .map(article => article.id);
};

export { sortArticlesByDate }

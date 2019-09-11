import sortBy from 'lodash/sortBy';
import { sortingOptions } from './sortingOptions';

const incorrectMonths = {
  oktober: 'oktober',
  mai: 'mai',
  desember: 'desember',
};
const correctMonths = {
  [incorrectMonths.oktober]: 'october',
  [incorrectMonths.mai]: 'may',
  [incorrectMonths.desember]: 'december',
};

const correctDate = (dateString) => Object.values(incorrectMonths)
  .reduce((result, incorrectMonth) => (
    dateString.indexOf(incorrectMonth) > -1
      ? dateString.replace(incorrectMonth, correctMonths[incorrectMonth])
      : result
  ), dateString);

const sortArticlesByDate = (entries, articlesIds, sortingOption) => {
  const articles = articlesIds.map((articleId) => entries[articleId]);

  const sortedArray = sortBy(articles, [
    (article) => new Date(correctDate(article.date)).getTime(),
  ])
    .map((article) => article.id);

  return sortingOption === sortingOptions.DESC ? sortedArray : sortedArray.reverse();
};

export { sortArticlesByDate };

const filterArticlesByCategories = (categories, entries) => {
  const entriesArray = Object.values(entries);

  return categories.length === 0
    ? entriesArray.map((entry) => entry.id)
    : entriesArray.reduce((result, article) => {
      if (categories.indexOf(article.category) > -1) {
        result.push(article.id);
      }

      return result;
    }, []);
};

export { filterArticlesByCategories };

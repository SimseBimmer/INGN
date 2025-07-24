import { fetchArticles } from './contentful.js';

fetchArticles()
  .then(articles => {
    console.log('Fetched articles:', articles);
  })
  .catch(error => {
    console.error('Error fetching articles:', error);
  });

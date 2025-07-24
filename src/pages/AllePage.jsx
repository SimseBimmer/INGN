import React, { useEffect, useState } from 'react';
import { fetchArticles } from '../utils/contentful';

import './AllePage.scss';

const PLACEHOLDER_COUNT = 6; // Set this to the number of article placeholders in your HTML

const AllePage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles().then(setArticles);
  }, []);

  // Repeat articles to fill all placeholders
  const repeatedArticles = [];
  for (let i = 0; i < PLACEHOLDER_COUNT; i++) {
    if (articles.length > 0) {
      repeatedArticles.push(articles[i % articles.length]);
    }
  }

  return (
    <div className="AllePageContainer">
      {repeatedArticles.map((article, idx) => {
        const fields = article.fields;
        return (
          <article key={idx} className="ArticleContainer">
            <h2 id="ArticleTitle">{fields.title}</h2>
            <h3 id="ArticleSubTitle">{fields.headerText}</h3>
            {fields.headerImage && fields.headerImage.fields && (
              <img
                id="ArticleImage"
                src={fields.headerImage.fields.file.url}
                alt={fields.headerImage.fields.title || ''}
              />
            )}
            <p id="ArticleDescription">{fields.description}</p>
            {fields.descriptionTwo && (
              <p id="ArticleDescriptionTwo">{fields.descriptionTwo}</p>
            )}
            {fields.descriptionThree && (
              <p id="ArticleDescriptionThree">{fields.descriptionThree}</p>
            )}
            {fields.authorDate && (
              <p id="ArticleAuthorDate">{fields.authorDate}</p>
            )}
          </article>
        );
      })}
    </div>
  );
};

export default AllePage;
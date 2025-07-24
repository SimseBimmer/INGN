import { createClient } from 'contentful';

const client = createClient({
  space: '7xhwjmf576jm', 
  accessToken: 'iGhpVUAU0KINXm1d1uBJATzkjOq4YeeaiODnXoJZRRA', 
  environment: 'master',
});

export async function fetchArticles() {
  const entries = await client.getEntries({
    content_type: 'newsArticle', // Ensure this matches your Contentful content type ID
  });
  return entries.items;
}

import { createClient } from 'next-sanity';

import { apiVersion, dataset, projectId } from '../env';

export const client = createClient({
  projectId, // Project ID from environment variables
  dataset,   // Dataset (e.g., production) from environment variables
  apiVersion, // API version from environment variables or default
  useCdn: false, // Set to false to fetch fresh data (important when using a token)
  token: process.env.SANITY_API_TOKEN, // Token for accessing private datasets
});

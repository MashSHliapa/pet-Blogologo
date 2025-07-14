import { blogEndpoint } from '../api';
import { client } from '../utils/client';

export const requestBlog = async () => {
  const { data } = await client.get(blogEndpoint);
  return data.results;
};

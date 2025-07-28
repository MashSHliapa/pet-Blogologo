import { blogEndpoint } from '../api';
import { client } from '../utils/client';

export const requestBlog = async () => {
  const { data } = await client.get(blogEndpoint);
  return data.results;
};

export const requestCardItem = async (id: string) => {
  const { data } = await client.get(blogEndpoint + '/' + id);
  return data;
};

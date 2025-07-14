import axios from 'axios';

export const client = axios.create({
  baseURL: 'https://api.spaceflightnewsapi.net/v4',
  timeout: 3000,
});

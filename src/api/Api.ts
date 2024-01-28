import axios from 'axios';

export const Api = axios.create({
  baseURL: 'https://api.our-memory.store/v2',
});

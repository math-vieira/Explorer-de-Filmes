import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
  params: {
    api_key: process.env.NEXT_PUBLIC_API_KEY
  }
});

api.interceptors.request.use(async (config) => {
  if (!config.params) {
    config.params = {};
  }
  config.params.api_key = process.env.NEXT_PUBLIC_API_KEY;
  return config;
});

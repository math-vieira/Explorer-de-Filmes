'use server';

import axios from 'axios';
import { TMoviesResponse } from '../movies/get-popular-movies.service';

export const getPopularMovies = async (
  page = 1,
  language = 'pt-BR',
  searchQuery?: string
): Promise<TMoviesResponse | undefined> => {
  const baseUrl = process.env.API_URL;
  const apiKey = process.env.API_KEY;
  const endpoint = !!searchQuery ? '/search/movie' : '/movie/popular';
  const params = !!searchQuery
    ? { query: searchQuery, page, language, api_key: apiKey }
    : { page, language, api_key: apiKey };

  const response = await axios.get(baseUrl + endpoint, { params });
  return response.data;
};

import { api } from '..';

export type TMovie = {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type TMoviesResponse = {
  page: number;
  results: TMovie[];
  total_pages: number;
  total_results: number;
};

export const getPopularMovies = async (
  page = 1,
  language = 'pt-BR',
  searchQuery?: string
): Promise<TMoviesResponse | undefined> => {
  try {
    const endpoint = !!searchQuery ? '/search/movie' : '/movie/popular';
    const params = !!searchQuery
      ? { query: searchQuery, page, language }
      : { page, language };

    const response = await api.get(endpoint, { params });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

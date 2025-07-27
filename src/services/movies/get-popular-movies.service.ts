import { api } from '..';

export const getPopularMovies = async (page = 1, language = 'pt-BR') => {
  try {
    const response = await api.get('/movie/popular', {
      params: {
        page,
        language
      }
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

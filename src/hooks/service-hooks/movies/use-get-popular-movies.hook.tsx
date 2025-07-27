import { useQuery } from '@tanstack/react-query';
import { getPopularMovies } from '@/services/movies/get-popular-movies.service';

const queryKey = ['popular-movies'];

export const useGetPopularMovies = (
  page: number,
  language: string,
  searchQuery?: string
) => {
  return useQuery({
    queryKey: [...queryKey, page, language, searchQuery],
    queryFn: () => getPopularMovies(page, language, searchQuery)
  });
};

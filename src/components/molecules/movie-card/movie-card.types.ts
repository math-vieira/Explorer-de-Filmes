import { TMovie } from '@/services/movies/get-popular-movies.service';

export type MovieCardProps = {
  movie: TMovie;
  onClick: () => void;
};

import { TMovie } from '@/services/movies/get-popular-movies.service';

export type MovieModalProps = {
  movie: TMovie;
  isOpen: boolean;
  onClose: () => void;
};

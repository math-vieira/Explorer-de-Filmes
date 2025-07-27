import Image from 'next/image';
import { MovieCardProps } from './movie-card.types';

export const MovieCard = ({ movie, onClick }: MovieCardProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR');
  };

  return (
    <div
      data-testid="movie-card"
      className="cursor-pointer overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 hover:shadow-lg focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`Ver detalhes do filme ${movie.title}`}
    >
      <div className="relative">
        {movie.poster_path ? (
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            width={300}
            height={450}
            className="h-auto w-full object-cover"
          />
        ) : (
          <div className="flex h-[450px] w-full items-center justify-center bg-gray-200">
            <div className="text-center">
              <div className="mx-auto mb-2 text-6xl text-gray-400">🎬</div>
              <p className="text-sm text-gray-500">Sem poster</p>
            </div>
          </div>
        )}
        <div className="absolute top-2 right-2 rounded-full bg-yellow-400 px-2 py-1 text-sm font-bold text-black">
          ⭐ {movie.vote_average.toFixed(1)}
        </div>
      </div>

      <div className="p-4">
        <h3 className="mb-2 line-clamp-2 text-lg font-bold text-gray-800">
          {movie.title}
        </h3>

        <p className="mb-3 line-clamp-3 text-sm text-gray-600">
          {movie.overview}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{formatDate(movie.release_date)}</span>
          <span>{movie.vote_count} votos</span>
        </div>
      </div>
    </div>
  );
};

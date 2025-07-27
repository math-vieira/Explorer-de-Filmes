'use client';

import { SearchBar } from '@/components/atoms/search-bar';
import { MovieCard } from '@/components/molecules/movie-card';
import { MovieModal } from '@/components/molecules/movie-modal';
import { useGetPopularMovies } from '@/hooks/service-hooks/movies/use-get-popular-movies.hook';
import { useState } from 'react';
import { TMovie } from '@/services/movies/get-popular-movies.service';

export const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMovie, setSelectedMovie] = useState<TMovie | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: movies, isPending: loadingMovies } = useGetPopularMovies(
    currentPage,
    'pt-BR'
  );

  const handleMovieClick = (movie: TMovie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMovie(null);
  };

  if (loadingMovies) {
    return (
      <div className="pt-10">
        <SearchBar
          label="Pesquise por um filme"
          placeholder="Escreva o nome de um filme"
        />
        <div className="mt-8 flex justify-center">
          <div className="text-lg text-gray-600">Carregando filmes...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-10">
      <div className="mb-8">
        <h1 className="mb-6 text-3xl font-bold text-gray-800">
          Filmes Populares
        </h1>

        <SearchBar
          label="Pesquise por um filme"
          placeholder="Escreva o nome de um filme"
        />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {movies?.results.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onClick={() => handleMovieClick(movie)}
          />
        ))}
      </div>

      {movies?.results.length === 0 && (
        <div className="mt-8 text-center text-gray-600">
          Nenhum filme encontrado.
        </div>
      )}

      <MovieModal
        movie={selectedMovie}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

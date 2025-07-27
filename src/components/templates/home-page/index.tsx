'use client';

import { SearchBar } from '@/components/atoms/search-bar';
import { LoadingMovies } from './components/loading-movies';
import { MovieCard } from '@/components/molecules/movie-card';
import { MovieModal } from '@/components/molecules/movie-modal';
import { useGetPopularMovies } from '@/hooks/service-hooks/movies/use-get-popular-movies.hook';
import { useDebounce } from '@/hooks/util-hooks/use-debounce.hook';
import { useState } from 'react';
import { TMovie } from '@/services/movies/get-popular-movies.service';

export const HomePage = () => {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMovie, setSelectedMovie] = useState<TMovie | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const debouncedSearch = useDebounce(search, 500);

  const { data: movies, isPending: loadingMovies } = useGetPopularMovies(
    currentPage,
    'pt-BR',
    debouncedSearch
  );

  return (
    <div className="pt-10">
      <div className="mb-8">
        <h1 className="mb-6 text-3xl font-bold text-gray-800">
          Filmes Populares
        </h1>

        <SearchBar
          label="Pesquise por um filme"
          placeholder="Escreva o nome de um filme"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {loadingMovies && (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {Array.from({ length: 10 }).map((_, index) => (
            <LoadingMovies key={index} />
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {movies?.results.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onClick={() => {
              setSelectedMovie(movie);
              setIsModalOpen(true);
            }}
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
        onClose={() => {
          setIsModalOpen(false);
          setSelectedMovie(null);
        }}
      />
    </div>
  );
};

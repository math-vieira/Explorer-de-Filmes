'use client';

import { SearchBar } from '@/components/atoms/search-bar';
import { useGetPopularMovies } from '@/hooks/service-hooks/movies/use-get-popular-movies.hook';
import { useState } from 'react';

export const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data: movies, isPending: loadingMovies } = useGetPopularMovies(
    currentPage,
    'pt-BR'
  );

  console.log(movies);

  return (
    <div className="pt-10">
      <SearchBar
        label="Pesquise por um filme"
        placeholder="Escreva o nome de um filme"
      />
      <ul></ul>
    </div>
  );
};

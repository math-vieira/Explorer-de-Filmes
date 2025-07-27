import { SearchBar } from '@/components/atoms/search-bar';

export const HomePage = () => {
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

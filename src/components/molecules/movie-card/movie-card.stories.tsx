import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { MovieCard } from './index';

const meta: Meta<typeof MovieCard> = {
  title: 'Molecules/MovieCard',
  component: MovieCard,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

const mockMovie = {
  adult: false,
  backdrop_path: '/8J6UlIFcU7eZfq9iCLbgc8Auklg.jpg',
  genre_ids: [14, 10751, 28],
  id: 1087192,
  original_language: 'en',
  original_title: 'How to Train Your Dragon',
  overview:
    'Filho cheio de imaginação, mas negligenciado, do Chefe Stoico, Soluço desafia séculos de tradição quando faz amizade com Banguela, um temido dragão Fúria da Noite. Seu vínculo improvável revela a verdadeira natureza dos dragões, desafiando os próprios fundamentos da sociedade viking.',
  popularity: 775.857,
  poster_path: '/1azTyARpXTtspi28K9rcMIDaHFB.jpg',
  release_date: '2025-06-06',
  title: 'Como Treinar o Seu Dragão',
  video: false,
  vote_average: 8.067,
  vote_count: 1264
};

const mockMovieWithoutPoster = {
  ...mockMovie,
  poster_path: null,
  title: 'Filme Sem Poster'
};

const mockMovieWithoutOverview = {
  ...mockMovie,
  overview: '',
  title: 'Filme Sem Sinopse'
};

export const Default: Story = {
  args: {
    movie: mockMovie,
    onClick: () => console.log('Movie clicked')
  }
};

export const WithoutPoster: Story = {
  args: {
    movie: mockMovieWithoutPoster,
    onClick: () => console.log('Movie clicked')
  }
};

export const WithoutOverview: Story = {
  args: {
    movie: mockMovieWithoutOverview,
    onClick: () => console.log('Movie clicked')
  }
};

export const LowRating: Story = {
  args: {
    movie: {
      ...mockMovie,
      vote_average: 3.2,
      vote_count: 45,
      title: 'Filme Com Baixa Avaliação'
    },
    onClick: () => console.log('Movie clicked')
  }
};

export const HighRating: Story = {
  args: {
    movie: {
      ...mockMovie,
      vote_average: 9.8,
      vote_count: 15420,
      title: 'Filme Com Alta Avaliação'
    },
    onClick: () => console.log('Movie clicked')
  }
};

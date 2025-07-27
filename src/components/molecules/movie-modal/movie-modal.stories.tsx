import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { MovieModal } from './index';

const meta: Meta<typeof MovieModal> = {
  title: 'Molecules/MovieModal',
  component: MovieModal,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    onClose: { action: 'closed' }
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
    'Filho cheio de imaginação, mas negligenciado, do Chefe Stoico, Soluço desafia séculos de tradição quando faz amizade com Banguela, um temido dragão Fúria da Noite. Seu vínculo improvável revela a verdadeira natureza dos dragões, desafiando os próprios fundamentos da sociedade viking. Com a feroz e ambiciosa Astrid e o peculiar ferreiro Bocão Bonarroto ao seu lado, Soluço confronta um mundo dilacerado pelo medo e por mal-entendidos.',
  popularity: 775.857,
  poster_path: '/1azTyARpXTtspi28K9rcMIDaHFB.jpg',
  release_date: '2025-06-06',
  title: 'Como Treinar o Seu Dragão',
  video: false,
  vote_average: 8.067,
  vote_count: 1264
};

const mockMovieWithoutBackdrop = {
  ...mockMovie,
  backdrop_path: null,
  title: 'Filme Sem Imagem de Fundo'
};

const mockMovieWithoutOverview = {
  ...mockMovie,
  overview: '',
  title: 'Filme Sem Sinopse'
};

export const Default: Story = {
  args: {
    movie: mockMovie,
    isOpen: true,
    onClose: () => console.log('Modal closed')
  }
};

export const WithoutBackdrop: Story = {
  args: {
    movie: mockMovieWithoutBackdrop,
    isOpen: true,
    onClose: () => console.log('Modal closed')
  }
};

export const WithoutOverview: Story = {
  args: {
    movie: mockMovieWithoutOverview,
    isOpen: true,
    onClose: () => console.log('Modal closed')
  }
};

export const Closed: Story = {
  args: {
    movie: mockMovie,
    isOpen: false,
    onClose: () => console.log('Modal closed')
  }
};

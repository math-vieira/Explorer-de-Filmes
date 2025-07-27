import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { LoadingMovies } from './index';

const meta: Meta<typeof LoadingMovies> = {
  title: 'Templates/HomePage/LoadingMovies',
  component: LoadingMovies,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-96">
      <LoadingMovies />
    </div>
  )
};

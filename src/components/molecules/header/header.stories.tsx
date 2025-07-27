import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Header } from './index';

const meta: Meta<typeof Header> = {
  title: 'Molecules/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-gray-50">
        <Story />
        <div className="px-5 pt-20">
          <h1 className="mb-4 text-2xl font-bold text-gray-800">
            Conteúdo da Página
          </h1>
          <p className="text-gray-600">
            Este é o conteúdo que apareceria abaixo do header fixo. O header
            está posicionado no topo da página.
          </p>
        </div>
      </div>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};

import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Footer } from './index';

const meta: Meta<typeof Footer> = {
  title: 'Molecules/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="flex min-h-screen flex-col bg-gray-50">
        <div className="flex-1 px-5 py-8">
          <h1 className="mb-4 text-2xl font-bold text-gray-800">
            Conteúdo da Página
          </h1>
          <p className="mb-4 text-gray-600">
            Este é o conteúdo principal da página. O footer aparecerá no final.
          </p>
          <div className="space-y-4">
            <div className="h-32 rounded-lg bg-white p-4 shadow-sm">
              <h3 className="font-semibold text-gray-800">Seção 1</h3>
              <p className="text-gray-600">Conteúdo da seção</p>
            </div>
            <div className="h-32 rounded-lg bg-white p-4 shadow-sm">
              <h3 className="font-semibold text-gray-800">Seção 2</h3>
              <p className="text-gray-600">Conteúdo da seção</p>
            </div>
          </div>
        </div>
        <Story />
      </div>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};

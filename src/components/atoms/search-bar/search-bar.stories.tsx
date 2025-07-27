import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { SearchBar } from './index';

const meta: Meta<typeof SearchBar> = {
  title: 'Atoms/SearchBar',
  component: SearchBar,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: { type: 'text' }
    },
    placeholder: {
      control: { type: 'text' }
    },
    disabled: {
      control: { type: 'boolean' }
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Pesquise por um filme',
    placeholder: 'Escreva o nome de um filme'
  }
};

export const WithoutLabel: Story = {
  args: {
    placeholder: 'Escreva o nome de um filme'
  }
};

export const Disabled: Story = {
  args: {
    label: 'Pesquise por um filme',
    placeholder: 'Escreva o nome de um filme',
    disabled: true
  }
};

export const WithValue: Story = {
  args: {
    label: 'Pesquise por um filme',
    placeholder: 'Escreva o nome de um filme',
    defaultValue: 'Batman'
  }
};

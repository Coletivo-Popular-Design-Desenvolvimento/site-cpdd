import Palette from '../../components/Palette/Palette';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
    title: 'Components/Palette',
    component: Palette,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Palette>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
};

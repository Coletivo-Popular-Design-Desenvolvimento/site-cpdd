import Typography from '../../components/Typography/Typography';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
    title: 'Components/Typography',
    component: Typography,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
};

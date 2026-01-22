import type { Meta, StoryObj } from '@storybook/react-vite';
import AccordionItem from '../components/Accordion/AccordionItem';

const meta = {
    title: 'Components/AccordionItem',
    component: AccordionItem,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof AccordionItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Título bacana',
        content: 'Conteúdo legal',
    },
};

import type { Preview } from '@storybook/react';
import { useEffect } from 'react';
import '../src/styles/globals.css';

const preview: Preview = {
  decorators: [
    (Story) => {
      useEffect(() => {
        // Initialize Preline
        import('preline/preline').then((module) => {
          const { HSStaticMethods } = module;
          HSStaticMethods.autoInit();
        });
      }, []);
      return <Story />;
    },
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

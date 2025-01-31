import React from "react";
import type { Preview } from "@storybook/react";
import '../src/story.css';
import { MemoryRouter } from "react-router";

export const decorators = [
  (Story) => (
    <MemoryRouter initialEntries={['/']}>
      <Story />
    </MemoryRouter>
  ),
];

/** @type { import('@storybook/react').Preview } */
const preview: Preview = {
  parameters: {
    backgrounds:{
      values:[
        { name: 'Dark', value: '#14111c' },
        { name: 'Light', value: '#F7F9F2' },
      ],
      default: 'Dark',
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

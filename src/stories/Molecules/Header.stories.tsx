import type { Meta, StoryObj } from '@storybook/react';

import Header from '../../molecules/Header/Header'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    //path to follow in the UI
    title: 'Molecules/Header',
    component: Header,

    //auto generate the documentation in storybook
    tags: ['autodocs'],

  } satisfies Meta<typeof Header>;

  export default meta;
  type Story = StoryObj<typeof meta>;

// Destructuring `article` to pass as individual props
export const Default: Story = {
    args: {
    }
};
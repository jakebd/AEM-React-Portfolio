import type { Meta, StoryObj } from '@storybook/react';

import Footer from '../../molecules/Footer/Footer';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    //path to follow in the UI
    title: 'Molecules/Footer',
    component: Footer,

    //auto generate the documentation in storybook
    tags: ['autodocs'],

  } satisfies Meta<typeof Footer>;

  export default meta;
  type Story = StoryObj<typeof meta>;

// Destructuring `article` to pass as individual props
export const Default: Story = {
    args: {
    }
};
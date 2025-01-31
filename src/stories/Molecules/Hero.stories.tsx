import type { Meta, StoryObj } from '@storybook/react';

import Hero from '../../molecules/Hero/Hero';
import HeroImg from '../assets/Hero_img.jpg';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    //path to follow in the UI
    title: 'Molecules/Hero',
    component: Hero,
    //auto generate the documentation in storybook
    tags: ['autodocs'],

  } satisfies Meta<typeof Hero>;

  export default meta;
  type Story = StoryObj<typeof meta>;

  export const Default: Story = {
    //overrides the default content.
    args: {
        imageUrl: `${HeroImg}`,
        title: "Hello World",
        subtitle: "Jacob"
    },
  };
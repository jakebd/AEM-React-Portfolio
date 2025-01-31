import type { Meta, StoryObj } from '@storybook/react';

import ArticleCard from '../../molecules/ArticleCard/ArticleCard';
import image from '../assets/react_1 (2).png';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    //path to follow in the UI
    title: 'Molecules/ArticleCard',
    component: ArticleCard,

    //auto generate the documentation in storybook
    tags: ['autodocs'],

  } satisfies Meta<typeof ArticleCard>;

  export default meta;
  type Story = StoryObj<typeof meta>;

// Destructuring `article` to pass as individual props
export const Default: Story = {
    args: {
        id: "1",
        articleTitle: "PostIt",
        featuredImage: `${image}`,
        articleIntro: "Hello, this is an article intro. ",
        articleContent: "Hello, this is an article Content.",
        categoryTag: "javascript",
    },
};
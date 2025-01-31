import type { Meta, StoryObj } from '@storybook/react';

import Title from '../../atoms/Title/Title';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    //path to follow in the UI
    title: 'Atoms/Title',
    component: Title,

    //auto generate the documentation in storybook
    tags: ['autodocs'],
  } satisfies Meta<typeof Title>;

  export default meta;
  type Story = StoryObj<typeof meta>;

  export const Default: Story = {
    //overrides the default content.
    args: {
        children: "Hello",
        size: 1,
    },
  };

  export const ClickableLink: Story = {
    args: {
      children: 'Clickable Heading',
      size: 1,
      link: 'postit',
      color: 'brand-primary-text-color',
    },
  };

  export const upperCase: Story = {
    args: {
      children: 'Uppercase Heading',
      size: 1,
      color: 'brand-primary-text-color',
      upperCase: true,
    },
  };

  export const centered: Story = {
    args: {
      children: 'Centered Heading',
      size: 1,
      color: 'brand-primary-text-color',
      centerText: true,
    },
  };

  export const allApplied: Story = {
    args: {
      children: 'Everything Heading',
      size: 1,
      link: "postit",
      color: 'brand-primary-text-color',
      upperCase: true,
      centerText: true,
    },
  };

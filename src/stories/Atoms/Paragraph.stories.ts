import type { Meta, StoryObj } from '@storybook/react';

import Paragraph from '../../atoms/paragraph/paragraph';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    //path to follow in the UI
    title: 'Atoms/Paragraph',
    component: Paragraph,

    //story book specific for positioning
    parameters: {
      layout: 'centered',
    },
    //auto generate the documentation in storybook
    tags: ['autodocs'],
    //defines the type of argument being passed
    argTypes: {
        children: { control: 'text' }
    },
    //defines the arguments the component is expecting
    args: { 
        children: "Default Text"
     },
  } satisfies Meta<typeof Paragraph>;

  export default meta;
  type Story = StoryObj<typeof meta>;

  export const Default: Story = {
    //overrides the default content.
    args: {
        children: "hello"
    },
  };
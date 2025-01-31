import type { Meta, StoryObj } from '@storybook/react';
import Tag from '../../atoms/tag/Tag';
import {  faClock, faNewspaper, faTag } from '@fortawesome/free-solid-svg-icons'; // Example FontAwesome icon


const meta = {
    title: 'Atoms/Tag',
    component: Tag,
    parameters: {
        layout: 'centered',
    },
    //auto generate the documentation in storybook
    tags: ['autodocs'],
    argTypes: {
        icon: { control: false }, // Disable control for icon since it's a complex object
    },
} satisfies Meta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tagText: 'Default Tag',
  },
};

export const WithArticleId: Story = {
  args: {
    tagText: 'Article Tag',
    articleId: 'postit',
    icon: faNewspaper,
  },
};

export const WithCategoryTag: Story = {
  args: {
    tagText: 'Category Tag',
    categoryTag: 'javascript',
    icon: faTag,
  },
};

export const WithoutLink: Story = {
  args: {
    tagText: 'Standalone Tag',
    icon: faClock,
  },
};

import { Meta, StoryObj } from '@storybook/react';
import Task, { TaskProps } from '../../molecules/Task';
import { fn } from "@storybook/test";

// Mocked actions for the story
export const ActionsData = {
    onArchiveTask: fn(),
    onPinTask: fn(),
};

const meta: Meta<typeof Task> = {
    component: Task,
    title: 'Atoms/Task',
    tags: ['autodocs'],
    excludeStories: /.*Data$/, // Ensures ActionsData is excluded as a story
    args: {
      ...ActionsData,
    },
};
export default meta;

// Define the Story object type
type Story = StoryObj<TaskProps>;

const defaultTask = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX',
}

export const Default: Story = {
  args: {
    task: defaultTask,
  },
};

export const Pinned: Story = {
  args: {
    task: {
      ...defaultTask,
      state: 'TASK_PINNED',
    },
  },
};

export const Archived: Story = {
  args: {
    task: {
      ...defaultTask,
      state: 'TASK_ARCHIVED',
    },
  },
};

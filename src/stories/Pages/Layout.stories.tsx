import type { Meta, StoryObj } from "@storybook/react";

import Layout from "../../molecules/Layout/Layout";

const meta: Meta<typeof Layout> = {
	title: "Pages/Basic Layout Page",
	component: Layout,
};

export default meta;

type Story = StoryObj<typeof Layout>;

export const LayoutPage: Story = {
    args: {
        children: "Your Content Here"
    }
};

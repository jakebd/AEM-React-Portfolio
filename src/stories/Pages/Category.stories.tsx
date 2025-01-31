import type { Meta, StoryObj } from "@storybook/react";

import Category from "../../pages/Category/Category";

const meta: Meta<typeof Category> = {
	title: "Pages/Category Page",
	component: Category,
};

export default meta;

type Story = StoryObj<typeof Category>;

export const CategoryPage: Story = {

};

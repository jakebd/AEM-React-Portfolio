import type { Meta, StoryObj } from "@storybook/react";

import Home from "../../pages/Home/Home";

const meta: Meta<typeof Home> = {
	title: "Pages/Home Page",
	component: Home,
};

export default meta;

type Story = StoryObj<typeof Home>;

export const HomePage: Story = {

};

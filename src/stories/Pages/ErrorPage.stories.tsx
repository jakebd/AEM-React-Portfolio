import type { Meta, StoryObj } from "@storybook/react";

import ErrorPage from "../../pages/Error/ErrorPage";

const meta: Meta<typeof ErrorPage> = {
	title: "Pages/Error Page",
	component: ErrorPage,
};

export default meta;

type Story = StoryObj<typeof ErrorPage>;

export const ErrorPagePage: Story = {

};

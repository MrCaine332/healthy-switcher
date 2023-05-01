import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
	title: 'Button',
	component: Button,
	argTypes: {
		style: {
			options: ['outlined', 'filled'],
			control: { type: 'inline-radio' },
		},
	},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Filled: Story = {
	// render: () => <Button style={"outlined"}>Button</Button>,
	args: {
		style: 'filled',
		children: "Button"
	},
};

export const Outlined: Story = {
	// render: () => <Button style={"outlined"}>Button</Button>,
	args: {
		style: 'outlined',
		children: "Button"
	},
};
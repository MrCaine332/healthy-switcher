import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

const meta: Meta<typeof Input> = {
	title: 'Input',
	component: Input,
	argTypes: {
		value: { control: 'text' },
		placeholder: { control: 'text' },
	},
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
	// render: () => <Input />,
	args: {
		// value: 'filled',
		// children: "Button"
	},
};
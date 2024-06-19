import type { Meta, StoryObj } from '@storybook/react';
import { TestClientComponent } from './test-client-component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof TestClientComponent> = {
  component: TestClientComponent,
  title: 'TestClientComponent',
};
export default meta;
type Story = StoryObj<typeof TestClientComponent>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to TestClientComponent!/gi)).toBeTruthy();
  },
};

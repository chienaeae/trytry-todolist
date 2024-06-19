import type { Meta, StoryObj } from '@storybook/react';
import { TestServerComponent } from './test-server-component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof TestServerComponent> = {
  component: TestServerComponent,
  title: 'TestServerComponent',
};
export default meta;
type Story = StoryObj<typeof TestServerComponent>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to TestServerComponent!/gi)).toBeTruthy();
  },
};

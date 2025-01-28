import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Button from "./button";

const meta = {
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "This is a customizable button component. It accepts various props such as `size`, `variant`, and `children`.",
      },
    },
  },
  argTypes: {
    size: {
      control: { type: "radio" },
      options: ["small", "medium"],
    },
    variant: {
      control: { type: "radio" },
      options: ["default", "hover", "focus", "inactive"],
    },
    className: { control: "text" },
  },
} as Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "medium",
    variant: "default",
    children: "Button",
  },
};

export const WithIcon: Story = {
  args: {
    size: "medium",
    variant: "default",
    children: "Button",
    icon: <span>📧</span>,
  },
};

export const Icon: Story = {
  args: {
    size: "small",
    variant: "default",
    icon: <span>📧</span>,
  },
};
export const Disable: Story = {
  args: {
    size: "small",
    variant: "inactive",
    icon: <span>📧</span>,
    children: "Button",
  },
};
export const Defaults: Story = {
  args: {
    ...Default.args,
    size: "small",
    className: "bg-red",
  },
};

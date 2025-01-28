import { Meta, StoryObj } from "@storybook/react";
import Input from "./input";

const meta = {
  component: Input,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "This is a customizable input component. It accepts various props such as `size`, `variant`, and `placeholder`.",
      },
    },
  },

  argTypes: {
    backgroundColor: { control: "color" },

    size: {
      control: { type: "radio" },
      options: ["small", "medium"],
    },
    variant: {
      control: { type: "radio" },
      options: ["default", "hover", "focus", "disabled", "error"],
    },
    types: {
      control: { type: "radio" },
      options: ["text", "password", "email"],
    },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    className: { control: "text" },
    errorMessage: { control: "text" },
    icon: { control: "text" },
  },
} as Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "medium",
    variant: "default",
    placeholder: "Enter text...",
  },
};

export const Password: Story = {
  args: {
    size: "medium",
    variant: "hover",
    placeholder: "Enter password...",
    types: "password",
  },
};

export const Email: Story = {
  args: {
    size: "medium",
    placeholder: "Enter Email...",
    variant: "focus",
    types: "email",
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    variant: "disabled",
    disabled: true,
  },
};

export const Error: Story = {
  args: {
    ...Default.args,
    variant: "error",
    errorMessage: "An error occurred.",
  },
};

export const WithIcon: Story = {
  args: {
    ...Default.args,
    icon: "🔍",
  },
};
export const ErrorIcon: Story = {
  args: {
    ...Default.args,
    variant: "error",
    errorMessage: "An error occurred.",
    icon: "🔍",
  },
};

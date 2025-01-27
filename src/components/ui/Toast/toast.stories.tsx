import { Meta, StoryObj } from "@storybook/react";
import Toast from "./toast";

const meta = {
  component: Toast,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Toast component for displaying success or error messages.",
      },
    },
  },
  argTypes: {
    type: {
      control: { type: "radio" },
      options: ["success", "error"],
    },
    title: {
      control: { type: "text" },
    },
    message: {
      control: { type: "text" },
    },
    className: { control: "text" },
  },
} as Meta<typeof Toast>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    type: "success",
    title: "Success",
    message:
      "Thank you for reaching out. We look forward to connecting with you soon.",
  },
};

export const Error: Story = {
  args: {
    type: "error",
    title: "Failed",
    message:
      "An error was found in your entries, please try filling out the form again!",
  },
};

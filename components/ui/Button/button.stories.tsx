import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/ui/Button/button";
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    size: "sm",
    disabled: false,
    onClick: action("default click"),
    children: "Default button",
    className: "shadow-lg",
  },
};
export const Primary: Story = {
  args: {
    variant: "default",
    size: "lg",
    disabled: true,
    onClick: action("default click"),
    children: "Default button",
    className: "shadow-lg",
  },
};

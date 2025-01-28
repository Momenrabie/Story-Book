// Form.stories.tsx
import { Meta, StoryObj } from "@storybook/react";
import Form from "./Form/form";

const meta = {
  component: Form,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "This is a customizable form component. It includes inputs for email and password, and a submit button.",
      },
    },
  },
  argTypes: {
    onSubmit: {
      action: "submitted",
    },
    emailPlaceholder: {
      control: "text",
      description: "Placeholder for the email input",
    },
    passwordPlaceholder: {
      control: "text",
      description: "Placeholder for the password input",
    },
    buttonText: {
      control: "text",
      description: "Text for the submit button",
    },
    buttonSize: {
      control: { type: "radio" },
      options: ["small", "medium"],
      description: "Size of the submit button",
    },
    buttonVariant: {
      control: { type: "radio" },
      options: ["default", "hover", "focus", "inactive"],
      description: "Variant of the submit button",
    },
  },
} as Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    emailPlaceholder: "أدخل بريدك الإلكتروني",
    passwordPlaceholder: "أدخل كلمة المرور",
    buttonText: "تسجيل الدخول",
    buttonSize: "medium",
    buttonVariant: "default",
  },
};

export const SmallButton: Story = {
  args: {
    ...Default.args,
    buttonSize: "small",
  },
};

export const InactiveButton: Story = {
  args: {
    ...Default.args,
    buttonVariant: "inactive",
  },
};

export const WithError: Story = {
  args: {
    ...Default.args,
    passwordPlaceholder: "كلمة المرور غير صحيحة",
    buttonVariant: "focus",
  },
};

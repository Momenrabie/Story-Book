import { Meta, StoryObj } from "@storybook/react";
import AuthPage from "../Login/login";

const meta = {
  component: AuthPage,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "This is a single page that acts as both Login and Register based on the type prop.",
      },
    },
  },
  argTypes: {
    type: {
      control: { type: "radio" },
      options: ["login", "register"],
    },
    image: {
      control: { type: "text" },
      description: "URL of the image to be displayed on the page",
    },
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Login: Story = {
  args: {
    type: "login",
    image:
      "https://www.graffiti9.com/wp-content/uploads/2019/10/Website-Banner.jpg",
  },
};

export const Register: Story = {
  args: {
    type: "register",
    image:
      "https://api.backlinko.com/app/uploads/2024/04/most-popular-websites-1280x717.webp",
  },
};

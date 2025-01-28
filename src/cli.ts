import { Command } from "commander";
import { promises as fs } from "fs";
import path from "path";

// تحديد نوع المكونات
const componentTemplates: Record<string, { tsx: string; stories: string }> = {
  Button: {
    tsx: `import React from 'react';

const Button = ({ children }: { children: React.ReactNode }) => (
  <button>{children}</button>
);

export default Button;`,
    stories: `import { Meta, Story } from '@storybook/react';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
} as Meta;

const Template: Story = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Click me',
};`,
  },
};

const program = new Command();

program
  .name("story-book-cli")
  .description("CLI to add components to your project")
  .version("1.0.0");

program
  .command("add <component>")
  .description("Add a component to your project")
  .action(async (component: keyof typeof componentTemplates) => {
    try {
      // تأكد من وجود المكون في الـ templates
      if (!componentTemplates[component]) {
        throw new Error(`Component "${component}" not found.`);
      }

      // المسار داخل مجلد المشروع
      const targetPath = path.join(
        process.cwd(),
        "src",
        "components",
        component
      );

      // التأكد من أن المجلد موجود أو قم بإنشائه
      await fs.mkdir(targetPath, { recursive: true });

      // نسخ الملفات إلى مجلد المشروع
      const componentCode = componentTemplates[component].tsx;
      const storiesCode = componentTemplates[component].stories;

      // حفظ الـ Button.tsx
      await fs.writeFile(
        path.join(targetPath, `${component}.tsx`),
        componentCode
      );

      // حفظ الـ Button.stories.tsx
      await fs.writeFile(
        path.join(targetPath, `${component}.stories.tsx`),
        storiesCode
      );

      console.log(`✅ Component "${component}" added successfully!`);
    } catch (error) {
      console.error(`❌ Error: ${error}`);
    }
  });

program.parse(process.argv);

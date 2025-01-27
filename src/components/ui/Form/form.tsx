// Form.tsx
import React, { useState } from "react";
import Input from "../Input/input";
import Button from "../Button/button";

type FormProps = {
  /** Function to handle form submission. */
  onSubmit: (data: { email: string; password: string }) => void;
  /** Placeholder for the email input. */
  emailPlaceholder?: string;
  /** Placeholder for the password input. */
  passwordPlaceholder?: string;
  /** Text for the submit button. */
  buttonText?: string;
  /** Size of the submit button. */
  buttonSize?: "small" | "medium";
  /** Variant of the submit button. */
  buttonVariant?: "default" | "hover" | "focus" | "inactive";
};

const Form: React.FC<FormProps> = ({
  onSubmit,
  emailPlaceholder = "أدخل بريدك الإلكتروني",
  passwordPlaceholder = "أدخل كلمة المرور",
  buttonText = "تسجيل الدخول",
  buttonSize = "medium",
  buttonVariant = "default",
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        types="email"
        placeholder={emailPlaceholder}
        size="medium"
        variant="default"
      />
      <Input
        types="password"
        placeholder={passwordPlaceholder}
        size="medium"
        variant="default"
      />
      <Button size={buttonSize} variant={buttonVariant}>
        {buttonText}
      </Button>
    </form>
  );
};

export default Form;

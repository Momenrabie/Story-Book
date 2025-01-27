// Form.tsx
import React, { useState } from "react";
import Input from "../Input/input";
import Button from "../Button/button";
const Form = ({ onSubmit, emailPlaceholder = "أدخل بريدك الإلكتروني", passwordPlaceholder = "أدخل كلمة المرور", buttonText = "تسجيل الدخول", buttonSize = "medium", buttonVariant = "default", }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ email, password });
    };
    return (React.createElement("form", { onSubmit: handleSubmit, className: "space-y-4" },
        React.createElement(Input, { types: "email", placeholder: emailPlaceholder, size: "medium", variant: "default" }),
        React.createElement(Input, { types: "password", placeholder: passwordPlaceholder, size: "medium", variant: "default" }),
        React.createElement(Button, { size: buttonSize, variant: buttonVariant }, buttonText)));
};
export default Form;

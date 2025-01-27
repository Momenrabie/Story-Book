import React from "react";
type InputProps = {
    /** The size of the input. */
    size?: "small" | "medium";
    /** The variant of the input, such as default, hover, or focus. */
    variant?: "default" | "hover" | "focus" | "disabled" | "error";
    /** Placeholder text for the input. */
    placeholder?: string;
    /** Whether the input is disabled. */
    disabled?: boolean;
    /** Additional class names for custom styling. */
    className?: string;
    /** The type of the input. */
    types?: "text" | "email" | "password";
    /** Error message to display below the input. */
    errorMessage?: string;
    /** Icon to display inside the input. */
    icon?: React.ReactNode;
};
declare const Input: React.FC<InputProps>;
export default Input;
//# sourceMappingURL=input.d.ts.map
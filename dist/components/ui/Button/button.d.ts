import React from "react";
type ButtonProps = {
    /** The size of the button. */
    size?: "small" | "medium";
    /** The variant of the button, such as default, hover, or focus. */
    variant?: "default" | "hover" | "focus" | "inactive" | "outline" | "ghost" | "link";
    icon?: React.ReactNode;
    children?: React.ReactNode;
    className?: string;
};
declare const Button: React.FC<ButtonProps>;
export default Button;
//# sourceMappingURL=button.d.ts.map
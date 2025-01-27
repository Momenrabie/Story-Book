import React from "react";
import clsx from "clsx";
const Button = ({ size = "medium", variant = "default", icon, children, className, }) => {
    const baseClasses = "flex items-center justify-center font-semibold rounded-lg transition-colors";
    const sizeClasses = {
        small: children ? "px-3 py-1 text-sm" : "w-8 h-8 text-sm",
        medium: children ? "px-4 py-2 text-base" : "w-10 h-10 text-base",
    };
    const variantClasses = {
        default: "bg-primary text-white hover:bg-teal-600 focus:ring-2 focus:ring-teal-500",
        hover: "bg-teal-600 text-white",
        focus: "ring-2 ring-teal-500 bg-teal-700 text-white",
        inactive: "bg-black text-white  cursor-not-allowed",
        outline: "border border-border bg-background hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
    };
    return (React.createElement("button", { className: clsx(baseClasses, sizeClasses[size], variantClasses[variant], className) },
        icon && React.createElement("span", { className: children ? "mr-2" : "" }, icon),
        children));
};
export default Button;

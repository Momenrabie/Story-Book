import React from "react";
import clsx from "clsx";
const Input = ({ types = "text", size = "medium", variant = "default", placeholder = "", disabled = false, className, errorMessage, icon, }) => {
    const baseClasses = "rounded-lg transition-colors border";
    const sizeClasses = {
        small: "px-3 py-1 text-sm",
        medium: "md:px-4 md:py-2 text-base sm:px-1 sm:py-1 sm:text-sm",
    };
    const variantClasses = {
        default: "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200",
        hover: "border-gray-400",
        focus: "border-blue-500 ring-2 ring-blue-200",
        disabled: "bg-gray-100 cursor-not-allowed",
        error: "border-red focus:border-red-500 focus:ring-2 focus:ring-red-200",
    };
    return (React.createElement("div", { className: "flex flex-col" },
        React.createElement("div", { className: "relative" },
            React.createElement("input", { type: types, placeholder: placeholder, disabled: disabled || variant === "disabled", className: clsx(baseClasses, sizeClasses[size], variantClasses[variant], className, icon ? "pl-10" : "") }),
            icon && (React.createElement("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" }, icon))),
        errorMessage && variant === "error" && (React.createElement("div", { className: "text-red text-sm mt-1" }, errorMessage))));
};
export default Input;

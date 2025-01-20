import React from "react";
import clsx from "clsx";

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

const Input: React.FC<InputProps> = ({
  types = "text",
  size = "medium",
  variant = "default",
  placeholder = "",
  disabled = false,
  className,
  errorMessage,
  icon,
}) => {
  const baseClasses = "rounded-lg transition-colors border";

  const sizeClasses = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-base",
  };

  const variantClasses = {
    default:
      "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200",
    hover: "border-gray-400",
    focus: "border-blue-500 ring-2 ring-blue-200",
    disabled: "bg-gray-100 cursor-not-allowed",
    error:
      "border-red focus:border-red-500 focus:ring-2 focus:ring-red-200",
  };

  return (
    <div className="flex flex-col">
      <div className="relative">
        <input
          type={types}
          placeholder={placeholder}
          disabled={disabled || variant === "disabled"}
          className={clsx(
            baseClasses,
            sizeClasses[size],
            variantClasses[variant],
            className,
            icon ? "pl-10" : ""
          )}
        />
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {icon}
          </div>
        )}
      </div>
      {errorMessage && variant === "error" && (
        <div className="text-red text-sm mt-1">{errorMessage}</div>
      )}
    </div>
  );
};

export default Input;

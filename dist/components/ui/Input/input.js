"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const clsx_1 = __importDefault(require("clsx"));
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
    return (react_1.default.createElement("div", { className: "flex flex-col" },
        react_1.default.createElement("div", { className: "relative" },
            react_1.default.createElement("input", { type: types, placeholder: placeholder, disabled: disabled || variant === "disabled", className: (0, clsx_1.default)(baseClasses, sizeClasses[size], variantClasses[variant], className, icon ? "pl-10" : "") }),
            icon && (react_1.default.createElement("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" }, icon))),
        errorMessage && variant === "error" && (react_1.default.createElement("div", { className: "text-red text-sm mt-1" }, errorMessage))));
};
exports.default = Input;

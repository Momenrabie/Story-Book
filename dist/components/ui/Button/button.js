"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const clsx_1 = __importDefault(require("clsx"));
const Button = ({ size = "medium", variant = "default", icon, children, className, }) => {
    const baseClasses = "flex items-center justify-center font-semibold rounded-lg transition-colors";
    const sizeClasses = {
        small: children ? "px-3 py-1 text-sm" : "w-8 h-8 text-sm",
        medium: children ? "px-4 py-2 text-base" : "w-10 h-10 text-base",
    };
    const variantClasses = {
        default: "bg-red text-white hover:bg-teal-600 focus:ring-2 focus:ring-teal-500",
        hover: "bg-teal-600 text-white",
        focus: "ring-2 ring-teal-500 bg-teal-700 text-white",
        inactive: "bg-black text-white  cursor-not-allowed",
    };
    return (react_1.default.createElement("button", { className: (0, clsx_1.default)(baseClasses, sizeClasses[size], variantClasses[variant], className) },
        icon && react_1.default.createElement("span", { className: children ? "mr-2" : "" }, icon),
        children));
};
exports.default = Button;

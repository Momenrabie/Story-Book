"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorIcon = exports.WithIcon = exports.Error = exports.Disabled = exports.Email = exports.Password = exports.Default = void 0;
const input_1 = __importDefault(require("./input"));
const meta = {
    component: input_1.default,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: "This is a customizable input component. It accepts various props such as `size`, `variant`, and `placeholder`.",
            },
        },
    },
    argTypes: {
        backgroundColor: { control: "color" },
        size: {
            control: { type: "radio" },
            options: ["small", "medium"],
        },
        variant: {
            control: { type: "radio" },
            options: ["default", "hover", "focus", "disabled", "error"],
        },
        types: {
            control: { type: "radio" },
            options: ["text", "password", "email"],
        },
        placeholder: { control: "text" },
        disabled: { control: "boolean" },
        className: { control: "text" },
        errorMessage: { control: "text" },
        icon: { control: "text" },
    },
};
exports.default = meta;
exports.Default = {
    args: {
        size: "medium",
        variant: "default",
        placeholder: "Enter text...",
    },
};
exports.Password = {
    args: {
        size: "medium",
        variant: "hover",
        placeholder: "Enter password...",
        types: "password",
    },
};
exports.Email = {
    args: {
        size: "medium",
        placeholder: "Enter Email...",
        variant: "focus",
        types: "email",
    },
};
exports.Disabled = {
    args: {
        ...exports.Default.args,
        variant: "disabled",
        disabled: true,
    },
};
exports.Error = {
    args: {
        ...exports.Default.args,
        variant: "error",
        errorMessage: "An error occurred.",
    },
};
exports.WithIcon = {
    args: {
        ...exports.Default.args,
        icon: "🔍",
    },
};
exports.ErrorIcon = {
    args: {
        ...exports.Default.args,
        variant: "error",
        errorMessage: "An error occurred.",
        icon: "🔍",
    },
};

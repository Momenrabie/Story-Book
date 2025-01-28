"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Error = exports.Success = void 0;
const toast_1 = __importDefault(require("./toast"));
const meta = {
    component: toast_1.default,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: "Toast component for displaying success or error messages.",
            },
        },
    },
    argTypes: {
        type: {
            control: { type: "radio" },
            options: ["success", "error"],
        },
        title: {
            control: { type: "text" },
        },
        message: {
            control: { type: "text" },
        },
        className: { control: "text" },
    },
};
exports.default = meta;
exports.Success = {
    args: {
        type: "success",
        title: "Success",
        message: "Thank you for reaching out. We look forward to connecting with you soon.",
        className: "bg-white",
    },
};
exports.Error = {
    args: {
        type: "error",
        title: "Failed",
        message: "An error was found in your entries, please try filling out the form again!",
        className: "bg-red",
    },
};

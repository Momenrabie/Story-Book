"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Defaults = exports.Disable = exports.Icon = exports.WithIcon = exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const button_1 = __importDefault(require("./button"));
const meta = {
    component: button_1.default,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: "This is a customizable button component. It accepts various props such as `size`, `variant`, and `children`.",
            },
        },
    },
    argTypes: {
        size: {
            control: { type: "radio" },
            options: ["small", "medium"],
        },
        variant: {
            control: { type: "radio" },
            options: ["default", "hover", "focus", "inactive"],
        },
        className: { control: "text" },
    },
};
exports.default = meta;
exports.Default = {
    args: {
        size: "medium",
        variant: "default",
        children: "Button",
    },
};
exports.WithIcon = {
    args: {
        size: "medium",
        variant: "default",
        children: "Button",
        icon: react_1.default.createElement("span", null, "\uD83D\uDCE7"),
    },
};
exports.Icon = {
    args: {
        size: "small",
        variant: "default",
        icon: react_1.default.createElement("span", null, "\uD83D\uDCE7"),
    },
};
exports.Disable = {
    args: {
        size: "small",
        variant: "inactive",
        icon: react_1.default.createElement("span", null, "\uD83D\uDCE7"),
        children: "Button",
    },
};
exports.Defaults = {
    args: {
        ...exports.Default.args,
        size: "small",
        className: "bg-red",
    },
};

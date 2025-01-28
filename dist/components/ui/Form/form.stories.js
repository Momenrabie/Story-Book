"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithError = exports.InactiveButton = exports.SmallButton = exports.Default = void 0;
const form_1 = __importDefault(require("./form"));
const meta = {
    component: form_1.default,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: "This is a customizable form component. It includes inputs for email and password, and a submit button.",
            },
        },
    },
    argTypes: {
        onSubmit: {
            action: "submitted",
        },
        emailPlaceholder: {
            control: "text",
            description: "Placeholder for the email input",
        },
        passwordPlaceholder: {
            control: "text",
            description: "Placeholder for the password input",
        },
        buttonText: {
            control: "text",
            description: "Text for the submit button",
        },
        buttonSize: {
            control: { type: "radio" },
            options: ["small", "medium"],
            description: "Size of the submit button",
        },
        buttonVariant: {
            control: { type: "radio" },
            options: ["default", "hover", "focus", "inactive"],
            description: "Variant of the submit button",
        },
    },
};
exports.default = meta;
exports.Default = {
    args: {
        emailPlaceholder: "أدخل بريدك الإلكتروني",
        passwordPlaceholder: "أدخل كلمة المرور",
        buttonText: "تسجيل الدخول",
        buttonSize: "medium",
        buttonVariant: "default",
    },
};
exports.SmallButton = {
    args: {
        ...exports.Default.args,
        buttonSize: "small",
    },
};
exports.InactiveButton = {
    args: {
        ...exports.Default.args,
        buttonVariant: "inactive",
    },
};
exports.WithError = {
    args: {
        ...exports.Default.args,
        passwordPlaceholder: "كلمة المرور غير صحيحة",
        buttonVariant: "focus",
    },
};

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Register = exports.Login = void 0;
const login_1 = __importDefault(require("./login"));
const meta = {
    component: login_1.default,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: "This is a single page that acts as both Login and Register based on the type prop.",
            },
        },
    },
    argTypes: {
        type: {
            control: { type: "radio" },
            options: ["login", "register"],
        },
        image: {
            control: { type: "text" },
            description: "URL of the image to be displayed on the page",
        },
    },
};
exports.default = meta;
exports.Login = {
    args: {
        type: "login",
        image: "https://www.graffiti9.com/wp-content/uploads/2019/10/Website-Banner.jpg",
    },
};
exports.Register = {
    args: {
        type: "register",
        image: "https://api.backlinko.com/app/uploads/2024/04/most-popular-websites-1280x717.webp",
    },
};

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const button_1 = __importDefault(require("../Button/button"));
const input_1 = __importDefault(require("../Input/input"));
const AuthPage = ({ type, image }) => {
    const isLogin = type === "login";
    return (react_1.default.createElement("div", { className: "flex justify-center items-center w-full h-screen bg-gray-50" },
        react_1.default.createElement("div", { className: "flex w-full bg-white shadow-lg rounded-lg overflow-hidden" },
            image && (react_1.default.createElement("div", { className: "w-1/2 bg-cover bg-center", style: { backgroundImage: `url(${image})` } })),
            react_1.default.createElement("div", { className: "flex flex-col justify-center items-center w-1/2 p-8" },
                react_1.default.createElement("h1", { className: "text-2xl font-bold mb-6 text-center" }, isLogin ? "Login" : "Register"),
                react_1.default.createElement("form", { className: "flex flex-col justify-center items-center space-y-4 w-full" },
                    !isLogin && (react_1.default.createElement(input_1.default, { types: "text", size: "medium", placeholder: "Enter your name" })),
                    react_1.default.createElement(input_1.default, { types: "email", size: "medium", variant: "default" }),
                    react_1.default.createElement(input_1.default, { types: "password", size: "medium", placeholder: isLogin ? "Enter your password" : "Create a password" }),
                    react_1.default.createElement("div", { className: "flex justify-center" },
                        react_1.default.createElement(button_1.default, { size: "medium", variant: "default" }, isLogin ? "Login" : "Register")))))));
};
exports.default = AuthPage;

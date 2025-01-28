"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const clsx_1 = __importDefault(require("clsx"));
const Toast = ({ type, title, message, className }) => {
    const baseClasses = "flex flex-col items-start p-4 rounded-lg shadow-md transition-all w-full max-w-xs";
    const typeClasses = {
        success: "bg-white text-black border border-grey/20",
        error: "text-white border border-grey/20",
    };
    const titleClasses = {
        success: "text-secondary font-bolld text-lg mb-1",
        error: "text-white font-bolld text-lg mb-1",
    };
    return (react_1.default.createElement("div", { className: (0, clsx_1.default)(baseClasses, typeClasses[type], className) },
        react_1.default.createElement("span", { className: (0, clsx_1.default)(titleClasses[type]) }, title || (type === "success" ? "Success" : "Failed")),
        react_1.default.createElement("span", { className: "text-sm" }, message)));
};
exports.default = Toast;

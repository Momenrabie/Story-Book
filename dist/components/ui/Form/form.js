"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Form.tsx
const react_1 = __importStar(require("react"));
const input_1 = __importDefault(require("../Input/input"));
const button_1 = __importDefault(require("../Button/button"));
const Form = ({ onSubmit, emailPlaceholder = "أدخل بريدك الإلكتروني", passwordPlaceholder = "أدخل كلمة المرور", buttonText = "تسجيل الدخول", buttonSize = "medium", buttonVariant = "default", }) => {
    const [email] = (0, react_1.useState)("");
    const [password] = (0, react_1.useState)("");
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ email, password });
    };
    return (react_1.default.createElement("form", { onSubmit: handleSubmit, className: "space-y-4" },
        react_1.default.createElement(input_1.default, { types: "email", placeholder: emailPlaceholder, size: "medium", variant: "default" }),
        react_1.default.createElement(input_1.default, { types: "password", placeholder: passwordPlaceholder, size: "medium", variant: "default" }),
        react_1.default.createElement(button_1.default, { size: buttonSize, variant: buttonVariant }, buttonText)));
};
exports.default = Form;

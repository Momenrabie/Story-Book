import React from "react";
import Button from "../Button/button";
import Input from "../Input/input";
const AuthPage = ({ type, image }) => {
    const isLogin = type === "login";
    return (React.createElement("div", { className: "flex justify-center items-center w-full h-screen bg-gray-50" },
        React.createElement("div", { className: "flex w-full bg-white shadow-lg rounded-lg overflow-hidden" },
            image && (React.createElement("div", { className: "w-1/2 bg-cover bg-center", style: { backgroundImage: `url(${image})` } })),
            React.createElement("div", { className: "flex flex-col justify-center items-center w-1/2 p-8" },
                React.createElement("h1", { className: "text-2xl font-bold mb-6 text-center" }, isLogin ? "Login" : "Register"),
                React.createElement("form", { className: "flex flex-col justify-center items-center space-y-4 w-full" },
                    !isLogin && React.createElement(Input, { size: "medium", placeholder: "Enter your name" }),
                    React.createElement(Input, { size: "medium", variant: "default" }),
                    React.createElement(Input, { types: "password", size: "medium", placeholder: isLogin ? "Enter your password" : "Create a password" }),
                    React.createElement("div", { className: "flex justify-center" },
                        React.createElement(Button, { variant: "default", icon: "\uD83D\uDD0D" }, isLogin ? "Login" : "Register")))))));
};
export default AuthPage;

import React from "react";
import clsx from "clsx";
const Toast = ({ type, title, message, className }) => {
    const baseClasses = "flex flex-col items-start p-4 rounded-lg shadow-md transition-all w-full max-w-xs";
    const typeClasses = {
        success: "bg-primaryy text-black border border-grey/20",
        error: "bg-secondaryy text-white border border-grey/20",
    };
    const titleClasses = {
        success: "text-secondary font-bolld text-lg mb-1",
        error: "text-white font-bolld text-lg mb-1",
    };
    return (React.createElement("div", { className: clsx(baseClasses, typeClasses[type], className) },
        React.createElement("span", { className: clsx(titleClasses[type]) }, title || (type === "success" ? "Success" : "Failed")),
        React.createElement("span", { className: "text-sm" }, message)));
};
export default Toast;

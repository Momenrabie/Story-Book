import React from "react";
import clsx from "clsx";

type ToastProps = {
  /** type for success or error */
  type: "success" | "error";
  /** title for success or Failed */
  title?: string;
  /** message for success or Failed */
  message: string;
  className?: string;
};

const Toast: React.FC<ToastProps> = ({ type, title, message, className }) => {
  const baseClasses =
    "flex flex-col items-start p-4 rounded-lg shadow-md transition-all w-full max-w-xs";

  const typeClasses = {
    success: "bg-white text-black border border-grey/20",
    error: "text-white border border-grey/20",
  };

  const titleClasses = {
    success: "text-secondary font-bolld text-lg mb-1",
    error: "text-white font-bolld text-lg mb-1",
  };

  return (
    <div className={clsx(baseClasses, typeClasses[type], className)}>
      <span className={clsx(titleClasses[type])}>
        {title || (type === "success" ? "Success" : "Failed")}
      </span>
      <span className="text-sm">{message}</span>
    </div>
  );
};

export default Toast;

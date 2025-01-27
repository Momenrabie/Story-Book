import React from "react";
type ToastProps = {
    /** type for success or error */
    type: "success" | "error";
    /** title for success or Failed */
    title?: string;
    /** message for success or Failed */
    message: string;
    className?: string;
};
declare const Toast: React.FC<ToastProps>;
export default Toast;
//# sourceMappingURL=toast.d.ts.map
import React from "react";
type FormProps = {
    /** Function to handle form submission. */
    onSubmit: (data: {
        email: string;
        password: string;
    }) => void;
    /** Placeholder for the email input. */
    emailPlaceholder?: string;
    /** Placeholder for the password input. */
    passwordPlaceholder?: string;
    /** Text for the submit button. */
    buttonText?: string;
    /** Size of the submit button. */
    buttonSize?: "small" | "medium";
    /** Variant of the submit button. */
    buttonVariant?: "default" | "hover" | "focus" | "inactive";
};
declare const Form: React.FC<FormProps>;
export default Form;
//# sourceMappingURL=form.d.ts.map
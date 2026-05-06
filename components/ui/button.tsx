import React, { ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "destructive";
  size?: "default";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", size = "default", ...props }, ref) => {
    const baseClasses =
      "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50";

    const variantClasses = {
      primary: "bg-primary-200 text-white hover:bg-primary-400",
      destructive: "bg-destructive text-white shadow",
    };

    const sizeClasses = {
      default: "h-10 px-4 py-2",
    };

    const combinedClassName = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

    return (
      <button ref={ref} className={combinedClassName} {...props} />
    );
  }
);

Button.displayName = "Button";

export { Button };

import React, { ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "destructive" | "ghost";
  size?: "default" | "large";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", size = "default", ...props }, ref) => {
    const baseClasses =
      "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[8px] text-[16px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-200 disabled:pointer-events-none disabled:opacity-50";

    const variantClasses = {
      primary: "bg-primary-500 text-white hover:bg-primary-600",
      secondary: "bg-primary-100 text-ink hover:bg-primary-200",
      destructive: "bg-destructive-100 text-destructive-200 hover:bg-[#ff9696]",
      ghost: "bg-transparent text-primary-500 hover:bg-primary-50",
    };

    const sizeClasses = {
      default: "h-10 px-4 py-2",
      large: "h-12 w-full px-5 py-3 text-[17px]",
    };

    const combinedClassName = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

    return (
      <button ref={ref} className={combinedClassName} {...props} />
    );
  }
);

Button.displayName = "Button";

export { Button };

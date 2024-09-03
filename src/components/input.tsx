import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const inputVariants = cva(
  "flex  px-3 py-2 text-xs md:text-sm file:bg-transparent file:border-0 file:w-min invalid:outline invalid:outline-1 invalid:outline-error-primary  ",
  {
    variants: {
      variant: {
        default:
          "bg-dark-primary text-white hover:bg-dark-secondary outline outline-1 outline-dark-secondary file:text-white",
        secondary: "bg-light-primary hover:bg-light-secondary text-black file:text-black",
      },
      rounded: {
        default: "rounded-lg",
        none: "rounded-none",
        full: "rounded-full",
      },
      disabled: {
        true: "cursor-not-allowed opacity-50",
        false: "",
      },
      status: {
        success: "outline outline-offset-2 outline-1 outline-success-primary",
        error: "outline outline-offset-2 outline-1 outline-error-primary ",
        warning: "outline outline-offset-2 outline-1 outline-warning-primary ",
        info: "outline outline-offset-2 outline-1 outline-info-primary ",
      },
    },
    defaultVariants: {
      rounded: "default",
      variant: "default",
      disabled: false,
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  rounded?: "default" | "none" | "full";
  disabled?: boolean;
  variant?: "default" | "secondary";
  status?: "success" | "error" | "warning" | "info";
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant,
      alt,
      rounded,
      type,
      className,
      placeholder,
      disabled,
      status,
      ...props
    },
    ref
  ) => (
    <input
      type={type || undefined}
      className={twMerge(
        inputVariants({ variant, rounded, className, disabled, status })
      )}
      ref={ref}
      alt={alt}
      disabled={disabled}
      placeholder={placeholder}
      {...props}
    />
  )
);
Input.displayName = "Input";

export { Input };

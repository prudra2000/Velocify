import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const inputVariants = cva(
  "flex  px-3 py-2 text-xs md:text-sm file:bg-transparent file:border-0 file:w-min  ",
  {
    variants: {
      variant: {
        default:
          "bg-gray-900 text-white hover:bg-gray-800 outline outline-1 outline-gray-800 file:text-white",
        outline:
          "bg-gray-200 hover:bg-gray-300 outline outline-1 outline-gray-300 file:text-black",
        secondary: "bg-gray-200 hover:bg-gray-300 file:text-black",
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
        success: "outline outline-1 outline-green-500 ",
        error: "outline outline-1 outline-red-500 ",
        warning: "outline outline-1 outline-yellow-500 ",
        info: "outline outline-1 outline-blue-500 ",
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
  variant?: "default" | "outline" | "secondary";
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
      {...props}
      alt={alt}
      disabled={disabled}
      placeholder={placeholder}
    />
  )
);
Input.displayName = "Input";

export { Input };

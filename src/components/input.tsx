import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const inputVariants = cva(
  "flex px-3 sm:px-3 sm:py-1 text-xs sm:text-sm md:text-base file:bg-transparent file:border-0 file:text-xs file:py-1 file:px-2",
  {
    variants: {
      variant: {
        default:
          "bg-gray-900 text-white hover:bg-gray-800 outline outline-1 outline-gray-800",
        outline:
          "bg-gray-200 hover:bg-gray-300 outline outline-1 outline-gray-300 ",
        secondary: "bg-gray-200 hover:bg-gray-300 ",
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
    }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ variant, alt, rounded, type, className, placeholder, disabled, ...props }, ref) => (
    <input
      type={type || undefined}
      className={twMerge(inputVariants({ variant, rounded, className, disabled }))}
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

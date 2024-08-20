import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const inputVariants = cva(
    "flex  h-10 w-full text-sm sm:text-sm md:text-base px-3 py-0 sm:px-3 sm:py-1  border border-input file:bg-transparent file:border-0 file:text-sm disabled:cursor-not-allowed disabled:opacity-50",
    {
      variants: {
        variant: {
          default: "rounded-lg",
          rounded: "rounded-full",
        },
      },
      defaultVariants: {
        variant: "default",
      },
    }
  );

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,VariantProps<typeof inputVariants> {

  } 

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({variant, alt, type, className, ...props }, ref) => (
    <input
      type={type}
      className={twMerge(inputVariants({ variant, className }))}
      ref={ref}
      {...props}
    />
  )
);
Input.displayName = "Input";

export { Input };

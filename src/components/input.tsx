import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const inputVariants = cva(
    "flex px-3 sm:px-3 sm:py-1 text-xs sm:text-sm md:text-base border border-input file:bg-transparent file:border-0 file:text-xs file:py-1 file:px-2 disabled:cursor-not-allowed disabled:opacity-50",
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
  ({variant, alt, type, className, placeholder, ...props }, ref) => (
    <input
      type={type || undefined}
      className={twMerge(inputVariants({ variant, className }))}
      ref={ref}
      {...props} 
      alt={alt}
      placeholder={placeholder}
      
    />
  )
);
Input.displayName = "Input";

export { Input };
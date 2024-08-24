import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const checkboxVariants = cva(
    " border-2 border-blue-500 bg-white",
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

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement>,VariantProps<typeof checkboxVariants> {
    accentColor?: string;
  } 

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({variant, alt, className, placeholder, accentColor, ...props }, ref) => (
    <input
      type="checkbox"
      style={{ accentColor }}
      className={twMerge(checkboxVariants({ variant, className }))}
      ref={ref}
      {...props} 
      alt={alt}
      placeholder={placeholder}
    />
  )
);
Checkbox.displayName = "Checkbox";

export { Checkbox };
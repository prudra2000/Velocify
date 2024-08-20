import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import * as React from "react";
const buttonVariants = cva(
  "flex flex-row justify-center items-center rounded-lg text-sm sm:text-sm md:text-base ",
  {
    variants: {
      variant: {
        default: "bg-gray-900 text-white hover:bg-gray-800",
        destructive: "bg-red-700 text-white hover:bg-red-600",
        outline:
          "bg-gray-200 hover:bg-gray-300 outline outline-2 outline-gray-300",
        secondary: "bg-gray-200 hover:bg-gray-300",
        ghost: "hover:bg-gray-300",
        link: "text-blue-700 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-3 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <button
        className={twMerge(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };

import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import * as React from "react";
const buttonVariants = cva(
  "flex flex-row justify-center items-center rounded-lg text-xs lg:text-sm ",
  {
    variants: {
      variant: {
        default: "bg-gray-900 text-white hover:bg-gray-800 outline outline-1 outline-gray-800",
        outline:
          "bg-gray-200 hover:bg-gray-300 outline outline-1 outline-gray-300 ",
        secondary: "bg-gray-200 hover:bg-gray-300 ",
        warning:
          "bg-yellow-500 text-black hover:bg-yellow-400 outline outline-1 outline-yellow-300",
        success:
          "bg-green-500 text-black hover:bg-green-400 outline outline-1 outline-green-300",
        info: "bg-blue-500 text-white hover:bg-blue-400 outline outline-1 outline-blue-300",
        error:
          "bg-red-500 text-white hover:bg-red-400 outline outline-1 outline-red-300",
        link: "text-blue-700 underline-offset-4 hover:underline",
        custom: "",
      },
      size: {
        default: "px-3 py-1.5",
        small: "rounded-md px-2 py-1",
        large: " rounded-md px-4 py-2",
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
      variant: "default",
      size: "default",
      rounded: "default",
      disabled: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  alt?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  leftAvatar?: React.ReactNode;     
  rightAvatar?: React.ReactNode;
  children?: React.ReactNode;
  rounded?: "default" | "none" | "full";
  disabled?: boolean;
  size?: "default" | "small" | "large" ;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, rounded, asChild = false, leftIcon, rightIcon, leftAvatar, rightAvatar, children, disabled, ...props }, ref) => { // {{ edit_2 }}
    return (
      <div className="flex flex-row items-center justify-center">
        
        <button
        className={twMerge(buttonVariants({ variant, size, rounded, className, disabled }))}
        ref={ref}
        {...props}
        disabled={disabled}
      >
        {leftIcon && <div className="mr-2">{leftIcon}</div>}
        {leftAvatar && <div className="mr-2">{leftAvatar}</div>}
        {children}
        {rightIcon && <div className="ml-2">{rightIcon}</div>}
        {rightAvatar && <div className="ml-2">{rightAvatar}</div>}
      </button>
      </div>
    );
  }
);

Button.displayName = "Button";

export { Button };
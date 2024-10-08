import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import * as React from "react";
const iconButtonVariants = cva(
  "flex flex-row justify-center items-center text-xs lg:text-sm ",
  {
    variants: {
      variant: {
        default: "bg-dark-primary text-white hover:bg-dark-secondary outline outline-1 outline-dark-secondary",
        secondary: "bg-light-primary hover:bg-light-secondary text-black",
        warning:
          "bg-warning-primary text-black hover:bg-warning-secondary outline outline-1 outline-warning-secondary",
        success:
          "bg-success-primary text-black hover:bg-success-secondary outline outline-1 outline-success-secondary",
        info: "bg-info-primary text-white hover:bg-info-secondary outline outline-1 outline-info-secondary",
        error:
          "bg-error-primary text-white hover:bg-error-secondary outline outline-1 outline-error-secondary",
        custom: "",
        ghost: "bg-transparent hover:bg-white/10 outline outline-1 outline-white/10 text-white",
      },
      size: {
        default: "px-2 py-2",
        small: "px-1.5 py-1.5",
        large: "px-3 py-3",
      },
      disabled: {
        true: "opacity-50 cursor-not-allowed",
        false: "",
      },
      rounded: {
        default: "rounded-full",
        none: "rounded-none",
        large: "rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      disabled: false,
      rounded: "default",
    },
  }
);

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {
  asChild?: boolean;
  alt?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  variant?: "default" | "secondary" | "warning" | "success" | "info" | "error" | "custom" | "ghost";
  size?: "default" | "small" | "large";
  rounded?: "default" | "none" | "large";
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, variant, size, asChild = false, alt, children, disabled, rounded, ...props }, ref) => {
    return (
      <div className="flex flex-row items-center justify-center">
        <button
          className={twMerge(iconButtonVariants({ variant, size, className, disabled, rounded }))}
          ref={ref}
          aria-label={alt}
          {...props}
        >
          {children}
        </button>
      </div>
    );
  }
);

IconButton.displayName = "IconButton";

export { IconButton };

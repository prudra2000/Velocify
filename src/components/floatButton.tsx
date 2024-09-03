"use client"; // Add this line

import { twMerge } from "tailwind-merge";
import { IconButton } from "./iconButton";
import { cva, type VariantProps } from "class-variance-authority";
const floatButtonVariants = cva(
    "fixed bottom-4 right-4 w-min h-min",
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
          small: "px-1 py-1",
          large: "px-3 py-3",
        },
        position: {
          "top-right": "top-4 right-4",
          "bottom-right": "bottom-4 right-4",
          "top-left": "top-4 left-4",
          "bottom-left": "bottom-4 left-4",
        },
        disabled: {
          true: "opacity-50 cursor-not-allowed",
          false: "",
        },
      },
      defaultVariants: {
        variant: "default",
        size: "default",
        disabled: false,
        position: "bottom-right",
      },
    }
  );

interface FloatButtonProps extends VariantProps<typeof floatButtonVariants> {
    onClick: () => void; // Add this line
    children: React.ReactNode;
    position?: "top-right" | "bottom-right" | "top-left" | "bottom-left";
    size?: "default" | "small" | "large";
    variant?: "default" | "secondary" | "warning" | "success" | "info" | "error" | "custom" | "ghost";
    disabled?: boolean;
    // ... other props
}

const FloatButton: React.FC<FloatButtonProps> = ({ onClick, children, variant, size, position, disabled, ...props }) => {
    return (
        <IconButton 
            variant="default" 
            size="large" 
            className={twMerge(floatButtonVariants({ variant, size, position, disabled }))} 
            onClick={onClick} // Add this line
            {...props}
        >
          <div className="flex flex-row gap-x-2 items-center justify-center">
            {children}
          </div>
        </IconButton>
    );
}

export default FloatButton;

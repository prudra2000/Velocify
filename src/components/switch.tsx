// components/Switch.tsx

import React from "react";
import { cva, cx, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const switchVariants = cva(
  "relative inline-flex justify-center items-center cursor-pointer select-none",
  {
    variants: {
      variant: {
        default:
          "bg-dark-primary text-white hover:bg-dark-secondary outline outline-1 outline-dark-secondary",
        secondary: "bg-light-primary hover:bg-light-secondary text-black",
        warning:
          "bg-warning-primary text-black hover:bg-warning-secondary outline outline-1 outline-warning-secondary",
        success:
          "bg-success-primary text-black hover:bg-success-secondary outline outline-1 outline-success-secondary",
        info: "bg-info-primary text-white hover:bg-info-secondary outline outline-1 outline-info-secondary",
        error:
          "bg-error-primary text-white hover:bg-error-secondary outline outline-1 outline-error-secondary",
        custom: "",
      },
      size: {
        default: "w-[2.75rem] h-5",
        small: "w-9 h-4",
        large: "w-[3.5rem] h-7",
      },
      disabled: {
        true: "cursor-not-allowed opacity-50",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      disabled: false,
    },
  }
);

interface SwitchProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof switchVariants> {
  isOn: boolean;
  handleToggle: () => void;
  onColor?: string;
  alt?: string;
  variant?:
    | "default"
    | "secondary"
    | "warning"
    | "success"
    | "info"
    | "error"
    | "custom";
  size: "default" | "small" | "large";
  disabled?: boolean;
}

const Switch: React.FC<SwitchProps> = ({
  isOn,
  handleToggle,
  variant = "default", // Default variant
  size = "default", // Default size
  disabled = false,
}) => {
  return (
    <div
      className={cx(
        `relative inline-flex items-center cursor-pointer select-none ${
          isOn
            ? switchVariants({ variant, size, disabled })
            : switchVariants({  size, disabled  }) // Apply size variant in both cases
        } rounded-full`,
        {
          // Removed size conditions here since they are handled in switchVariants
        },
        
      )}
      onClick={handleToggle}
    >
      <span
        className={cx(
          `absolute left-1 top-1/2 -translate-y-1/2 rounded-full shadow-md transform transition-transform ${
            isOn
              ? size === "default"
                ? "translate-x-5"
                : size === "small"
                ? "translate-x-4"
                : size === "large"
                ? "translate-x-6"
                : ""
              : "translate-x-0"
          }`,
          {
            // Removed size conditions, using thumbSize instead
            "w-4 h-4": size === "default",
            "w-3 h-3": size === "small",
            "w-6 h-6": size === "large",
          },
          {
            "bg-gray-dark": variant === "secondary",
            "bg-white": 
            variant === "default" ||
              variant === "warning" || 
              variant === "success" || 
              variant === "info" || 
              variant === "error",
            "": variant === "custom",  
          }
        )}
      />
    </div>
  );
};

export default Switch;

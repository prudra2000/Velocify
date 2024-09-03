// components/RadioButton.tsx
import { cx } from "class-variance-authority";
import React from "react";

import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const radioButtonVariants = cva(
  "peer col-start-1 row-start-1 appearance-none shrink-0 w-4 h-4 b disabled:border-paragraph-secondary0",
  {
    variants: {
      rounded: {
        default: "rounded",
        none: "rounded-none",
        full: "rounded-full",
      },
      variant: {
        default:
          "bg-dark-primary text-white hover:bg-dark-secondary outline outline-1 outline-dark-secondary",
        secondary: "bg-light-primary hover:bg-light-secondary text-black",
        custom: "",
      },
      size: {
        default: "h-5 w-5",
        small: "h-4 w-4",
        large: "h-6 w-6",
      },
      disabled: {
        true: "cursor-not-allowed opacity-50",
        false: "",
      },
      selectedColor: {
        default: "bg-light-primary",
        secondary: "bg-light-secondary",
        warning: "bg-warning-secondary",
        success: "bg-success-secondary",
        info: "bg-info-secondary",
        error: "bg-error-secondary",
        accent: "bg-accent-secondary",
        custom: "bg-custom",
      }
    },
    defaultVariants: {
      variant: "default",
      rounded: "default",
      disabled: false,
      size: "default",
    },
  }
);

interface RadioButtonProps extends VariantProps<typeof radioButtonVariants> {
  label: string;
  value: string;
  name: string;
  checked?: boolean;
  onChange: (value: string) => void;
  variant?: "default" | "secondary" | "custom";
  rounded?: "default" | "none" | "full";
  size?: "default" | "small" | "large";
  disabled?: boolean;
  className?: string;
  alt?: string;
  selectedColor?: "default" | "secondary" | "warning" | "success" | "info" | "error" | "accent" | "custom";
}

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  value,
  name,
  checked,
  onChange,
  variant,
  rounded,
  size,
  disabled,
  className,
  alt,
  selectedColor,
}) => {
  return (
    <label className={`flex gap-2 items-center ${disabled ? "cursor-not-allowed opacity-50" : ""}`}>
      <div className="grid place-items-center mt-1">
        <input
          type="radio"
          className={twMerge(
            radioButtonVariants({
              variant,
              rounded,
              size,
              disabled,
              className,
            }),
           
          )}
          name={name}
          value={value}
          checked={checked}
          onChange={() => onChange(value)}
          alt={alt}
        />
        <div
          className={cx(
            "pointer-events-none",
            "col-start-1 row-start-1",
            "w-2 h-2 rounded-full",
            "peer-checked:peer-disabled:bg-paragraph-secondary",
            {
              "peer-checked:bg-light-primary": selectedColor === "default",
              "peer-checked:bg-dark-secondary": selectedColor === "secondary",
              "peer-checked:bg-warning-secondary": selectedColor === "warning",
              "peer-checked:bg-success-secondary": selectedColor === "success",
              "peer-checked:bg-info-secondary": selectedColor === "info",
              "peer-checked:bg-error-secondary": selectedColor === "error",
              "peer-checked:bg-accent-secondary": selectedColor === "accent",
              "peer-checked:bg-custom": selectedColor === "custom",
            },
            disabled ? "cursor-not-allowed opacity-50" : ""
          )}
        />
      </div>

      <span className="text-paragraph-secondary">{label}</span>
    </label>
  );
};

export default RadioButton;

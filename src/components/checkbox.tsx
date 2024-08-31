import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

import React, { useState, useEffect } from "react"; // Import useState and useEffect


const checkboxVariants = cva(
  "peer cursor-pointer transition-all  appearance-none  shadow hover:shadow-md border border-white/30  focus:ring-green-500",
  {
    variants: {
      variant: {
        default: "",
      },
      rounded: {
        default: "rounded",
        none: "rounded-none",
        full: "rounded-full",
      },
      color: {
        default:
          "checked:bg-dark-primary hover:bg-dark-secondary/50 checked:border-light-secondary",
        secondary:
          "checked:bg-light-primary hover:bg-light-secondary/50 checked:border-light-secondary",
        warning:
          "checked:bg-warning-primary hover:bg-warning-secondary/50 checked:border-warning-secondary",
        success:
          "checked:bg-success-primary hover:bg-success-secondary/50 checked:border-success-secondary",
        info: "checked:bg-info-primary hover:bg-info-secondary/50 checked:border-info-secondary",
        error:
          "checked:bg-error-primary hover:bg-error-secondary/50 checked:border-error-secondary",
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
    },
    defaultVariants: {
      variant: "default",
      rounded: "default",
      disabled: false,
      size: "default",
    },
  }
);

interface CheckboxProps extends VariantProps<typeof checkboxVariants> {
  label?: string;
  checked?: boolean;
  onChange: (checked: boolean) => void;
  variant?: "default";
  rounded?: "default" | "none" | "full";
  color?: "default" | "secondary" | "warning" | "success" | "info" | "error";
  size?: "default" | "small" | "large";
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked: controlledChecked, // Rename prop to avoid confusion
  onChange,
  variant,
  rounded,
  color,
  disabled, 
  className,
  size,
  icon,
  ...props
}) => {
  const [checked, setChecked] = useState(controlledChecked ?? true); // Initialize state
//CHANCE THE IMPLEMENTATION OF THE CHECKBOX OF PRODU
  useEffect(() => {
    setChecked(controlledChecked ?? true); // Sync with controlled prop
  }, [controlledChecked]);

  const handleCheckboxChange = () => {
    const newChecked = !checked;
    setChecked(newChecked); // Update internal state
    onChange(newChecked); // Call onChange with new value
  };

  return (
    <div className="inline-flex items-center">
      <label className="flex items-center cursor-pointer relative">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleCheckboxChange}
          className={twMerge(
            checkboxVariants({ variant, rounded, color, className, disabled, size })
          )}
          disabled={disabled}
          {...props}
        />
        <span
          className={twMerge(
            `absolute opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none`,
            color === "default"
              ? "text-white"
              : color === "secondary"
              ? "text-black"
              : color === "warning"
              ? "text-white"
              : color === "success"
              ? "text-white"
              : color === "info"
              ? "text-white"
              : color === "error"
              ? "text-white"
              : "text-white"
          )}
        >
          {icon ? icon : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={twMerge(`h-4 w-4`, size === "small" ? "h-3 w-3" : size === "large" ? "h-5 w-5" : "h-4 w-4")}
            viewBox="0 0 20 20"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="1"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
            </svg>
          )}
        </span>
      </label>
      {label && <label className="ml-2 text-xs text-white">{label}</label>}
    </div>
  );
};

export default Checkbox;

// components/RadioButton.tsx
import { cx } from "class-variance-authority";
import React from "react";

import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";


const radioButtonVariants = cva(
    "peer col-start-1 row-start-1 appearance-none shrink-0 w-4 h-4  border-2  focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-accent-secondary/10 disabled:border-gray-4000",
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
            "border-dark-secondary-primary hover:bg-dark-secondary/50 checked:border-light-secondary ",
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


interface RadioButtonProps extends VariantProps<typeof radioButtonVariants> {
  label: string;
  value: string;
  name: string;
  checked?: boolean;
  onChange: (value: string) => void;
  variant?: "default";
  rounded?: "default" | "none" | "full";
  size?: "default" | "small" | "large";
  disabled?: boolean;
  className?: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  value,
  name,
  checked,
  onChange,
  variant,
  rounded,
  color,
  size,
  disabled,
  className,
}) => {
  return (
    <label className="flex gap-2 items-start">
      <div className="grid place-items-center mt-1">
        <input
          type="radio"
          className={twMerge(
            radioButtonVariants({ variant, rounded, color, size, disabled, className })
          )}
          name={name}
          value={value}
          checked={checked}
          onChange={() => onChange(value)}
        />
        <div
          className={cx(
            "pointer-events-none",
            "col-start-1 row-start-1",
            "w-2 h-2 rounded-full peer-checked:bg-accent-secondary",
            "peer-checked:peer-disabled:bg-gray-400"
          )}
        />
      </div>

      <span className="ml-1 text-gray-700">{label}</span>
    </label>
  );
};

export default RadioButton;

import React from "react";
import RadioButton from "./radioButton";
import { twMerge } from "tailwind-merge";

interface Option {
  label: string;
  value: string;
  alt?: string;
}

interface RadioButtonGroupProps {
  name: string;
  options: Option[];
  selectedValue: string;
  onChange: (value: string) => void;
  rounded?: "default" | "none" | "full";
  variant?: "default" | "secondary" | "custom";
  size?: "small" | "large" | "default";
  disabled?: boolean;
  selectedColor?:
    | "default"
    | "secondary"
    | "warning"
    | "success"
    | "info"
    | "error"
    | "accent"
    | "custom";
  label?: string;
  labelClassName?: string;
  orientation?: "horizontal" | "vertical";
}

const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
  name,
  options,
  selectedValue,
  onChange,
  rounded = "full",
  variant = "default",
  size = "default",
  disabled,
  selectedColor = "default",
  label,
  labelClassName,
  orientation = "vertical",
}) => {
  return (
    <div className="flex flex-col gap-y-2">
      {label && (
          <h1 className={twMerge("", labelClassName)}>{label}</h1>
      )}
      <div className={twMerge("flex flex-col justify-center items-start gap-3", orientation === "horizontal" ? "flex-row" : "flex-col")}>
        {options.map((option) => (
          <RadioButton
            key={option.value}
            label={option.label}
            value={option.value}
            alt={option.alt}
            name={name}
            checked={selectedValue === option.value}
            onChange={onChange}
            variant={variant}
            rounded={rounded}
            size={size}
            disabled={disabled}
            selectedColor={selectedColor}
          />
        ))}
      </div>
    </div>
  );
};

export default RadioButtonGroup;

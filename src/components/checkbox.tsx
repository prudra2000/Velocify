import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import * as RadixCheckbox from "@radix-ui/react-checkbox"; // Renamed import
import { Check } from "lucide-react";

type CheckboxProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string; // Added label prop
  disabled?: boolean; // Added disabled prop
  className?: string; // Added className prop for custom styling
};

const Checkbox: React.FC<CheckboxProps> = React.memo(
  ({ checked, onChange, label, disabled, className }) => {
    return (
      <div className={`flex items-center space-x-2 ${className}`}>
        <RadixCheckbox.Root
          checked={checked}
          onCheckedChange={(newChecked) => onChange(Boolean(newChecked))}
          className={`flex w-5 h-5 appearance-none items-center justify-center border border-gray-300 rounded-md ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={disabled} // Apply disabled state
        >
          <RadixCheckbox.Indicator className="bg-white ">
            <Check className="w-4 h-4"/>
          </RadixCheckbox.Indicator>
        </RadixCheckbox.Root>
        {label && <span>{label}</span>} 
      </div>
    );
  }
);
export default Checkbox;

Checkbox.displayName = "Checkbox";

export { Checkbox };
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
  accentColor?: string; // Added accentColor prop
};

const Checkbox: React.FC<CheckboxProps> = React.memo(
  ({ checked, onChange, label, disabled, className, accentColor }) => {
    return (
      <div className={`flex items-center ${className}`}>
        <RadixCheckbox.Root
          checked={checked}
          onCheckedChange={(newChecked) => onChange(Boolean(newChecked))}
          className={`flex w-5 h-5  items-center justify-center border border-primary ring-offset-background rounded-sm ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={disabled} // Apply disabled state
        >
          <RadixCheckbox.Indicator className={`rounded-sm `} style={{ backgroundColor: accentColor }}>
            <Check className="w-4 h-4 stroke-white"/>
          </RadixCheckbox.Indicator>
        </RadixCheckbox.Root>
        <div className="ml-2">
          {label && <span>{label}</span>} 
        </div>
      </div>
    );
  }
);
export default Checkbox;

Checkbox.displayName = "Checkbox";

export { Checkbox };
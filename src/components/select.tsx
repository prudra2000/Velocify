import * as RadixSelect from "@radix-ui/react-select";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import React from "react";
import { ChevronDown, ChevronUp, Check } from "lucide-react";
// Ensure CheckIcon is imported

// New component for SelectTrigger
const SelectTrigger = ({ children }: { children: React.ReactNode }) => (
  <RadixSelect.Trigger className=" flex w-full px-3 py-2 text-xs sm:text-sm md:text-base border border-input rounded-lg">
    <div className="inline-flex items-center justify-center">
      {children}
      <RadixSelect.Icon>
        <ChevronDown className="ml-2 w-4 h-4" />
      </RadixSelect.Icon>
    </div>
  </RadixSelect.Trigger>
);
SelectTrigger.displayName = "SelectTrigger";

// New component for SelectItem
const SelectItem: React.FC<{
  className: string;
  value: string;
  children?: React.ReactNode;
}> = ({ className, value, children }) => (
  <RadixSelect.Item
    value={value}
    className={twMerge(
      "relative flex w-full flex-row select-none items-center px-3 py-1 sm:px-3 sm:py-2 text-xs sm:text-sm md:text-base rounded-md focus:bg-gray-100 ",
      className
    )}
  >
    <div className="flex flex-row items-center">
        <RadixSelect.ItemIndicator>
          <Check className="ml-2 w-4 h-4" />
        </RadixSelect.ItemIndicator>

      <RadixSelect.ItemText className="flex flex-col ">
        <span className="max-w-xs truncate">{children}</span>
      </RadixSelect.ItemText>
    </div>
  </RadixSelect.Item>
);
SelectItem.displayName = "SelectItem";

const Select = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
    placeholder: string;
  }
>(({ className, style, children, placeholder, ...props }, ref) => (
  <RadixSelect.Root>
    <SelectTrigger>
      <RadixSelect.Value placeholder={placeholder} />
    </SelectTrigger>
    <RadixSelect.Portal>
      <RadixSelect.Content className="bg-white relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border shadow-md">
        <RadixSelect.Viewport className="p-1 flex flex-col items-center text-center">
          {children}
        </RadixSelect.Viewport>
      </RadixSelect.Content>
    </RadixSelect.Portal>
  </RadixSelect.Root>
));
Select.displayName = "Select";

export { Select, SelectItem, SelectTrigger };

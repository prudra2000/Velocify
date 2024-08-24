import * as RadixSelect from "@radix-ui/react-select";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
 // Ensure CheckIcon is imported

const Select = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, style, ...props }, ref) => (
  <RadixSelect.Root>
    <RadixSelect.Trigger className="inline-flex items-center justify-center rounded px-[15px] text-[13px] leading-none h-[35px] gap-[5px] bg-white text-violet11 shadow-[0_2px_10px] shadow-black/10 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-violet9 outline-none">
      <div className="inline-flex items-center justify-center">
        <RadixSelect.Value placeholder="Select a fruit…" />
        <RadixSelect.Icon>
          <ChevronDown />
        </RadixSelect.Icon>
      </div>
    </RadixSelect.Trigger>
    <RadixSelect.Portal>
      <RadixSelect.Content className="overflow-hidden bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
        <RadixSelect.ScrollUpButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
          <ChevronUp />
        </RadixSelect.ScrollUpButton>
        <RadixSelect.Viewport>
          <RadixSelect.Group>
            <RadixSelect.Label className="px-[25px] text-xs leading-[25px] text-mauve11">
              Fruits
            </RadixSelect.Label>
            <RadixSelect.Item value="apple">Apple</RadixSelect.Item>
            <RadixSelect.Item value="banana">Banana</RadixSelect.Item>
            <RadixSelect.Item value="orange">Orange</RadixSelect.Item>
          </RadixSelect.Group>
        </RadixSelect.Viewport>
        <RadixSelect.ScrollDownButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
          <ChevronDown />
        </RadixSelect.ScrollDownButton>
      </RadixSelect.Content>
    </RadixSelect.Portal>
  </RadixSelect.Root>
));
Select.displayName = "Select";


export { Select };
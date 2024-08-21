"use client";
import * as React from "react";
import * as SwitchP from "@radix-ui/react-switch";
import { twMerge } from "tailwind-merge";

type SwitchRef = React.ElementRef<typeof SwitchP.Root>;
type SwitchProps = React.ComponentPropsWithoutRef<typeof SwitchP.Root>;

const Switch = React.forwardRef<SwitchRef, SwitchProps>(
  ({ className, ...props }, ref) => (
    <SwitchP.Root
      className={twMerge(
        "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
        className
      )}
      {...props}
      ref={ref}
    >
      <SwitchP.Thumb
        className="pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
      />
    </SwitchP.Root>
  )
);

Switch.displayName = "Switch";

export { Switch };

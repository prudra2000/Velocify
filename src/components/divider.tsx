import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import * as React from "react";

const dividerVariants = cva("w-full h-full", {
  variants: {
    variant: {
      default: " bg-dark-secondary",
    },
    orientation: {
      horizontal: "h-[1px]",
      vertical: "w-[1px]",
    },
  },
  defaultVariants: {
    variant: "default",
    orientation: "horizontal",
  },
});

interface DividerProps extends VariantProps<typeof dividerVariants> {
  className?: string;
  size?: "default" | "medium";
  orientation?: "horizontal" | "vertical";
  variant?: "default";
}

const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  ({ variant, className, size, orientation, ...props }, ref) => (
    <div>
      <div
        ref={ref}
        className={twMerge(
          dividerVariants({
            variant,
            className,
            orientation,
          })
        )}
        {...props}
      >
      </div>
    </div>
  )
);
Divider.displayName = "Divider";

export { Divider, dividerVariants };

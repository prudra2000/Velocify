import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import * as React from "react";

const dividerVariants = cva("", {
  variants: {
    variant: {
      default: "bg-dark-secondary",
    },
    orientation: {
      horizontal: "h-[1px] w-full",
      vertical: "w-[1px] h-full",
    },
  },
  defaultVariants: {
    variant: "default",
    orientation: "horizontal",
  },
});

interface DividerProps extends VariantProps<typeof dividerVariants> {
  className?: string;
  orientation?: "horizontal" | "vertical";
  variant?: "default";
  size?: "small" | "medium" | "large";
}

const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  ({ variant, className, orientation, size, ...props }, ref) => {
    return (
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
  }
);
Divider.displayName = "Divider";

export { Divider, dividerVariants };

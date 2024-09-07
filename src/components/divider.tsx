import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import * as React from "react";

const dividerVariants = cva(
  "bg-white w-full",
  {
    variants: {
      variant: {
        default:
          "",
      },
      size: {
        default: "",
        verticalMedium: "",
        horizontalMedium: "",
      },
      orientation: {
        horizontal: "h-1",
        vertical: "w-1",
      },
    },
    defaultVariants: {
      variant: "default",
      orientation: "horizontal",
      size: "default",
    },
  }
);

interface DividerProps extends VariantProps<typeof dividerVariants> {
  className?: string;
  size?: "default" | "verticalMedium" | "horizontalMedium";
  orientation?: "horizontal" | "vertical";
}

const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  ({ variant, className, size, orientation, ...props }, ref) => (
    <div>
      <div
        ref={ref}
        className={twMerge(dividerVariants({ variant, className, orientation, size }))}
        {...props}
      >
        <hr className={orientation} />
      </div>
    </div>
  )
);
Divider.displayName = "Divider";

export { Divider, dividerVariants };
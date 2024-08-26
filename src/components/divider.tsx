import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import * as React from "react";

const dividerVariants = cva(
  "bg-black ",
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
      orientationStyle: {
        horizontal: "h-0.5",
        vertical: "w-0.5",
      },
    },
    defaultVariants: {
      variant: "default",
      orientationStyle: "horizontal",
      size: "default",
    },
  }
);

interface DividerProps extends VariantProps<typeof dividerVariants> {
  className?: string;
  size?: "default" | "verticalMedium" | "horizontalMedium"; // Updated size options
  orientation?: "horizontal" | "vertical";
}

const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  ({ variant, className, size, orientation = "vertical", ...props }, ref) => (
    <div className={twMerge(orientation === "horizontal" && size === "horizontalMedium" ? "px-1" : orientation === "vertical" && size === "verticalMedium" ? "my-1" : "")}> {/* Apply padding conditionally */}
      <div
        ref={ref}
        className={twMerge(dividerVariants({ variant, className, orientationStyle: orientation, size }))}
        {...props}
      >
        <hr className={orientation} />
      </div>
    </div>
  )
);
Divider.displayName = "Divider";

export { Divider, dividerVariants };
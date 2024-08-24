import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import * as React from "react";

const badgeVariants = cva(
  "flex flex-row justify-center items-center rounded-full text-xs sm:text-sm md:text-base",
  {
    variants: {
      variant: {
        default: "bg-gray-900 text-white hover:bg-gray-800",
        destructive: "bg-red-700 text-white hover:bg-red-600 ",
        outline:
          "bg-gray-200 hover:bg-gray-300 outline outline-2 outline-gray-300 ",
        secondary: "bg-gray-200 hover:bg-gray-300 ",
      },
      size: {
        default: "px-4 py-1 ",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface BadgeProps extends VariantProps<typeof badgeVariants> {
  alt?: string;
  className?: string;
  children?: React.ReactNode;
}

const Badge = React.forwardRef<
  HTMLDivElement,
   BadgeProps
>(({ variant, alt, children, className, ...props }, ref) => (
  <div ref={ref} className={twMerge(badgeVariants({ variant, className }))} {...props}>
    {children}
  </div>
));
Badge.displayName = "Badge";

export { Badge, badgeVariants };

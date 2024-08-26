import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import * as React from "react";

const badgeVariants = cva(
  "flex flex-row max-w-[10rem] justify-center items-center rounded-full text-xs  truncate ...",
  {
    variants: {
      variant: {
        default:
          "bg-gray-900 text-white hover:bg-gray-800 outline outline-1 outline-gray-600",
        
      },
      size: {
        default: "px-4 py-1",
        large: "px-6 py-2",
        small: "px-2 py-0.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface BadgeProps extends VariantProps<typeof badgeVariants> {
  className?: string;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  avatar?: React.ReactNode;
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ variant, avatar, children, className, icon, ...props }, ref) => (
    <div
      ref={ref}
      className={twMerge(badgeVariants({ variant, className }))}
      {...props}
    >
      {icon && <div className="mr-2">{icon}</div>}
      {avatar && <div className="mr-2">{avatar}</div>}
      {children}
    </div>
  )
);
Badge.displayName = "Badge";

export { Badge, badgeVariants };

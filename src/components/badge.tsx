import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import * as React from "react";

const badgeVariants = cva(
  "flex flex-row max-w-[10rem] justify-center items-center rounded-full text-xs  truncate ... disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-gray-900 text-white hover:bg-gray-800 outline outline-1 outline-gray-800",
        outline:
          "bg-gray-200 hover:bg-gray-300 outline outline-1 outline-gray-300 ",
        secondary: "bg-gray-200 hover:bg-gray-300 ",
        warning:
          "bg-yellow-500 text-black hover:bg-yellow-400 outline outline-1 outline-yellow-300",
        success:
          "bg-green-500 text-black hover:bg-green-400 outline outline-1 outline-green-300",
        info: "bg-blue-500 text-white hover:bg-blue-400 outline outline-1 outline-blue-300",
        error:
          "bg-red-500 text-white hover:bg-red-400 outline outline-1 outline-red-300",
        custom: "",
      },
      size: {
        default: "px-2 py-1",
        large: "px-6 py-2",
        small: "px-2 py-0.5",
      },
      disabled: {
        true: "cursor-not-allowed opacity-50",
        false: "",
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
  size?: "default" | "large" | "small";
  disabled?: boolean;
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ variant, avatar, children, className, icon, size, disabled, ...props }, ref) => (
    <div
      ref={ref}
      className={twMerge(badgeVariants({ variant, size, className, disabled }))}
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

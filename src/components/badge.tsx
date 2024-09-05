import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge"; // Add this import

const badgeVariants = cva(
  "absolute grid place-items-center rounded-full",
  {
    variants: {
      variant: {
        default:
          "bg-dark-primary text-white outline outline-1 outline-dark-secondary",
        secondary: "bg-light-primary  text-black outline outline-1 outline-light-secondary",
        warning:
          "bg-warning-primary text-black outline outline-1 outline-warning-secondary",
        success:
          "bg-success-primary text-black outline outline-1 outline-success-secondary",
        info: "bg-info-primary text-white outline outline-1 outline-info-secondary",
        error:
          "bg-error-primary text-white outline outline-1 outline-error-secondary",
        custom: "",
      },
      position: {
        "top-right": "top-0 right-0 -translate-y-1/2 translate-x-1/2",
        "bottom-left": "bottom-0 left-0 translate-y-1/2 -translate-x-1/2",
        "top-left": "top-0 left-0 -translate-y-1/2 -translate-x-1/2",
        "bottom-right": "bottom-0 right-0 translate-y-1/2 translate-x-1/2",
      },
      size: {
        default: "min-w-4 h-4 text-[0.70rem] px-0.5",
        large: "min-w-6 h-5 text-[0.75rem] px-1",
        small: "min-w-3 h-3 text-[0.50rem] px-0.5",
      },
      noContent: {
        true: "p-0 w-2 h-2",
        false: "",
      },
      disabled: {
        true: "text-opacity-50",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      position: "top-right",
    },
  }
);
interface BadgeProps extends VariantProps<typeof badgeVariants> {
  children: React.ReactNode;
  variant?:
    | "default"
    | "secondary"
    | "warning"
    | "success"
    | "info"
    | "error"
    | "custom";
  size?: "small" | "large" | "default"; // Removed "medium"
  rounded?: "small" | "medium" | "large" | "full";
  position?: "top-right" | "bottom-right" | "top-left" | "bottom-left";
  className?: string;
  content?: string;
  onContent?: boolean;
  disabled?: boolean;
}

const Badge: React.FC<BadgeProps> = ({
  children,
  content,
  variant,
  size,
  rounded,
  position,
  className = "",
  onContent,
  disabled,
}) => {
  return (
    <div className="relative inline-flex flex-col">
      {children}
      <span
        className={twMerge(
          badgeVariants({
            variant,
            size,
            position,
            className,
            noContent: content === "" ? true : false, // Updated to use noContent as a boolean
            disabled: disabled ? true : false,
          })
        )}
      >
        {content}
      </span>
    </div>
  );
};

export default Badge;

import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge"; // Add this import

const badgeVariants = cva(
  "absolute grid translate-x-2/4 -translate-y-2/4 place-items-center rounded-full",
  {
    variants: {
      variant: {
        default:
          "bg-dark-primary text-white outline outline-1 outline-dark-secondary",
        secondary: "bg-light-primary  text-black",
        warning:
          "bg-warning-primary text-black outline outline-1 outline-warning-secondary",
        success:
          "bg-success-primary text-black outline outline-1 outline-success-secondary",
        info: "bg-info-primary text-white outline outline-1 outline-info-secondary",
        error:
          "bg-error-primary text-white outline outline-1 outline-error-secondary",
        custom: "",
      },
      rounded: {
        small: "rounded-sm",
        medium: "rounded-md",
        large: "rounded-lg",
        full: "rounded-full",
      },
      position: {
        "top-right": "top-0.5 right-0", // Corrected key
        "bottom-right": "top-full right-full", // Added this line
        "top-left": "top-0.5 right-full", // Added this line
        "bottom-left": "top-full right-0", // Added this line
      },
      size: {
        default: "min-w-4 h-4 text-[0.70rem] px-0.5",
        large: "min-w-6 min-h-6 text-[0.75rem] px-1",
        small: "min-w-3 h-3 text-[0.50rem] px-0.5",
      },
      noContent: {
        true: "p-0 w-2 h-2",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      rounded: "full",
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
  content: string;
  onContent?: boolean;
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
}) => {
  return (
    <div className="relative inline-flex flex-col">
      {children}
      <span
        className={twMerge(
          badgeVariants({
            variant,
            size,
            rounded,
            position,
            className,
            noContent: content === "" ? true : false, // Updated to use noContent as a boolean
          })
        )}
      >
        {content}
      </span>
    </div>
  );
};

export default Badge;

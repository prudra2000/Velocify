import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const textareaVariants = cva(
    "flex min-h-[90px] w-full px-2 py-2 text-xs sm:text-sm md:text-sm   disabled:cursor-not-allowed disabled:opacity-50 placeholder:text-muted-foreground",
    {
      variants: {
        variant: {
          default:
            "bg-gray-900 text-white hover:bg-gray-800 outline outline-1 outline-gray-800 file:text-white",
          outline:
            "bg-gray-200 hover:bg-gray-300 outline outline-1 outline-gray-300 file:text-black",
          secondary: "bg-gray-200 hover:bg-gray-300 file:text-black",
        },
        rounded: {
          default: "rounded-lg",
          none: "rounded-none",
        },
        disabled: {
          true: "cursor-not-allowed opacity-50",
          false: "",
        },
        status: {
          success: "outline outline-1 outline-green-500 valid:outline-green-500",
          error: "outline outline-1 outline-red-500 invalid:outline-red-500",
          warning: "outline outline-1 outline-yellow-500 ",
          info: "outline outline-1 outline-blue-500 ",
        },
      },
      defaultVariants: {
        rounded: "default",
        variant: "default",
        disabled: false,
      },
    }
  );

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,VariantProps<typeof textareaVariants> {
    rounded?: "default" | "none";
    disabled?: boolean;
    variant?: "default" | "outline" | "secondary";
    status?: "success" | "error" | "warning" | "info";
  } 

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({variant, className, disabled, status, rounded, ...props }, ref) => (
    <textarea
      className={twMerge(textareaVariants({ variant, className, disabled, status, rounded }))}
      ref={ref}
      {...props}
    />
  )
);
Textarea.displayName = "Textarea";

export { Textarea };

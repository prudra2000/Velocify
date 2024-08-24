import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const textareaVariants = cva(
    "flex min-h-[90px] w-full px-2 py-2 text-xs sm:text-sm md:text-sm  border border-input disabled:cursor-not-allowed disabled:opacity-50 placeholder:text-muted-foreground",
    {
      variants: {
        variant: {
          default: "rounded-lg", 
        },
      },
      defaultVariants: {
        variant: "default",
      },
    }
  );

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,VariantProps<typeof textareaVariants> {

  } 

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({variant, className, ...props }, ref) => (
    <textarea
      className={twMerge(textareaVariants({ variant, className }))}
      ref={ref}
      {...props}
    />
  )
);
Textarea.displayName = "Textarea";

export { Textarea };

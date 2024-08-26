import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import * as React from "react";
const iconButtonVariants = cva(
  "flex flex-row rounded-full justify-center items-center text-xs lg:text-sm ",
  {
    variants: {
      variant: {
        default: "bg-gray-900 text-white hover:bg-gray-800",
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
        link: "text-blue-700 underline-offset-4 hover:underline",
        custom: "",
      },
      size: {
        default: "px-2 py-2",
        small: "px-1 py-1",
        large: "px-3 py-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {
  asChild?: boolean;
  alt?: string;
  children?: React.ReactNode;
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    // {{ edit_2 }}
    return (
      <div className="flex flex-row items-center justify-center">
        <button
          className={twMerge(iconButtonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        >
          {children}
        </button>
      </div>
    );
  }
);

IconButton.displayName = "IconButton";

export { IconButton };

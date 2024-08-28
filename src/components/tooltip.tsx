import React, { useState } from 'react';
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from 'tailwind-merge'; // Add this import

const tooltipVariants = cva(
    "absolute w-auto p-1 text-xs text-center transition-opacity duration-300 whitespace-normal",
    {
      variants: {
        variant: {
          light: "bg-gray-100 text-black outline outline-1 outline-gray-300",
          dark: "bg-black text-white outline outline-1 outline-gray-700",
          custom: "",
        },
        rounded: {
          small: "rounded-sm",
          medium: "rounded-md",
          large: "rounded-lg",
          full: "rounded-full",
        },
        position: {
          top: "bottom-full mb-2",
          bottom: "top-full mt-2",
          left: "right-full mr-2",
          right: "left-full ml-2",
        },
        size: {
          default: "px-4 py-1",
          large: "px-6 py-2",
          small: "px-2 py-0.5",
        },
      },
      defaultVariants: {
        variant: "light",
        size: "default",
        rounded: "small",
      },
    }
  );

interface TooltipProps extends VariantProps<typeof tooltipVariants> {
    text: string;
    children: React.ReactNode;
    className?: string;
}

const Tooltip: React.FC<TooltipProps> = ({ variant, size, rounded, text, children, position, className }) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div 
            className="relative flex flex-col items-center" 
            onMouseEnter={() => setIsVisible(true)} 
            onMouseLeave={() => setIsVisible(false)}
        >
            {children}
            {isVisible && (
                <div className={twMerge(tooltipVariants({ variant, size, rounded, position, className }))}>
                    {text}
                </div>
            )}
        </div>
    );
};

export default Tooltip;